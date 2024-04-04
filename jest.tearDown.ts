import DataBaseSetup from "./db";

export default async () => {
  try {
    await DataBaseSetup.truncate({ cascade: true });
    await DataBaseSetup.close();
  } catch (err) {
    console.log(err);
  } finally {
    process.exit(0);
  }
};
