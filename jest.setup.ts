import DataBaseSetup from "./db";

export default async () => {
  try {
    await DataBaseSetup.authenticate();
    console.log("Db connected successfully");
  } catch (err) {
    console.log(err);
  }
};
