import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { router, render } from "./lib";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/Not-Found";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import PostDetailPage from "./pages/Post-Detail";
import PostPage from "./pages/Post";
import ProjectDetailPage from "./pages/Project-Detail";
import ProjectsPage from "./pages/Projects";
import AdminProjectsPage from "./pages/admin/Projects";
import AdminProjectAddPage from "./pages/admin/ProjectAdd";
import AdminProjectEditPage from "./pages/admin/Projects-Edit";
import AdminUserPage from "./pages/admin/User";
import AdminAboutPage from "./pages/admin/About";
import AdminContactPage from "./pages/admin/Contact";
import signinPage from "./pages/Singin";
import signupPage from "./pages/Singup";


const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/About", () => render(AboutPage, app));
router.on("/Contact", () => render(ContactPage, app));
router.on("/post/postId", () => render(PostDetailPage, app));
router.on("/Post", () => render(PostPage, app));
router.on("/project/:projectId", (params) => render(() => ProjectDetailPage(params), app));
router.on("/Projects", () => render(ProjectsPage, app));

router.on("/admin/User", () => render(AdminUserPage, app));
router.on("/admin/About", () => render(AdminAboutPage, app));
router.on("/admin/Contact", () => render(AdminContactPage, app));

router.on("/Singin", () => render(signinPage, app));
router.on("/Singup", () => render(signupPage, app));

router.on("/admin/Projects", () => render(AdminProjectsPage, app)); 
router.on("/admin/ProjectAdd", () => render(AdminProjectAddPage, app)); 
router.on("admin/Projects/:ProjectId/Edit", ({data}) => 
    render(() => AdminProjectEditPage(data), app)
);
router.notFound(() => render(NotFoundPage, app));
router.resolve();
// render(HomePage, app);
// npm i navigo --save