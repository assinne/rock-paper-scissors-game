## Getting Started

Installation

```bash
npm install
```

To Run
```bash
npm run dev
```

Goto "http://localhost:3001/" for development*.

* I was testing how change port and kept it.
## Notes
There is a warning in console, which is related to server and client side render with nextjs. I have storing the score in session storage, so it can persist through refresh. This is causing an warning to pop up in console, due to server-side rendering, unable to access this data. I have found the solution using "useEffect" which does not work with class components. I am unable to find a clear and simple solution to this warning, and at this time opt not to fix it. 

With more time I would have moved the score from client side storage to backend storage. This simple project does not warrent any long term database storage.


