import { cookies } from "next/header";
import { withSessionRoute } from "lib/config/withSession";

const VALID_EMAIL = "asd";
const VALID_PASSWORD = "asd";

// export default withSessionRoute(createSessionRoute);

// async function createSessionRoute(req, res) {
//   console.log("withSessionRoute");
//   if (req.method === "POST") {
//     const { email, password } = req.body;

//     if (email === VALID_EMAIL && password === VALID_PASSWORD) {
//       req.session.user = {
//         username: "asd",
//         isAdmin: true,
//       };
//       await req.session.save();
//       res.send({ ok: true });
//     }
//     return res.status(403).send("");
//   }
//   return res.status(404).send("");
// }

export function POST() {}
