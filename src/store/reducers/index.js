import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { mailApi } from "../services/mailApi";

const mailsAdapter = createEntityAdapter()

const searchSlice = createSlice({
  name: 'search',
  initialState: mailsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(mailApi.endpoints.getMails.matchFulfilled, (state, { payload }) => {
      mailsAdapter.addMany(state, payload)
    })
  }
})

export default searchSlice.reducer

export const {
  selectAll: selectMails,
  selectById: selectMailById
} = mailsAdapter.getSelectors((state) => state.search);

export const selectMailsByQuery = createSelector(
  selectMails,
  (_, args) => args.tag,
  (_, args) => args.query,
  (mails, tag, query) => {

    let filteredMails = mails
    if (query) {
      query = query.trim().toLowerCase()
      filteredMails = mails.filter(mail => mail.body.replaceAll("\n", " ").includes(query) || mail.subject.includes(query))
    }

    if (tag === 'all') {
      return filteredMails
    } else {
      return filteredMails.filter(mail => mail.tag === tag)
    }
  }
)

export const selectMailsByTagAndId = createSelector(
  selectMailById,
  (_, id, tag) => tag,
  (mail, tag) => {
    if (tag === 'all') {
      return mail
    }
    return mail?.tag === tag ? mail : null
  }
)