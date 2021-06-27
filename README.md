## How To Run

- run `npm install` to install the dependencies
- run `npm run dev` to run it locally in development mode
- run `npm run build` to create the production build and then `npm run serve` to preview the build locally

## Following are the route patterns
```
/inbox -> (inbox) default
/draft -> (draft)
/all -> (all)
/spam -> (spam)
/trash -> (trash)

/inbox/1 -> Email with id = 1 (from inbox category)
/spam/8 -> Email with id = 8 (from spam category)

/all?search=sunt -> Search emails containing sunt
```