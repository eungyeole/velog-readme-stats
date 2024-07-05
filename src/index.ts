import app from "./app";

app.listen(
  {
    port: 3000,
  },
  (err, address) => {
    if (err) {
      throw err;
    }
    console.log(`Server listening on ${address}`);
  }
);
