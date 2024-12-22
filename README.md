## Steps to initiate

### Clone the repo

```bash
  git clone https://link-to-project
```

### Go to the project directory

```bash
  cd currency-exchange
```

### Create a file `.env` in the root folder and set the next keys

```bash
REACT_APP_API_URL=https://api.vatcomply.com/
REACT_APP_CURRENCY_HREF=https://www.xe.com/currency/
REACT_APP_BASE_CURRENCY=USD
REACT_APP_CURRENCIES=USD,EUR
```
- **REACT_APP_API_URL:** Api to get currencies and rates.
If not added, it will have a default value of http://localhost:3001/.
- **REACT_APP_CURRENCY_HREF:** Url to redirect for footer
If not added, it will have a default value of http://localhost:3001/currencies/.
- **REACT_APP_CURRENCIES:** You can add the list of availables currencies in the API.
(REACT_APP_CURRENCIES=USD,EUR,JPY...)
If not added, it will have a default value of USD,EUR.
- **REACT_APP_BASE_CURRENCY:** You need to add a currency included in the currencies list 
(REACT_APP_BASE_CURRENCY=USD)
If not added, it will have a default value of USD.

### Verify Node to `v18.20.4`

### Runs `npm run i`

### Runs the app in the development mode `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
