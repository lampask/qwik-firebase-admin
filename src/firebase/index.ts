import {
  initializeApp,
  cert,
  getApps,
  type ServiceAccount,
} from "firebase-admin/app";

export function init() {
  getApps().length > 0
    ? console.log("App already exists")
    : initializeApp({
        credential: cert(
          JSON.parse(
            Buffer.from(process.env.GOOGLE_SA_KEY!, "base64").toString()
          ) as ServiceAccount
        ),
      });
}
