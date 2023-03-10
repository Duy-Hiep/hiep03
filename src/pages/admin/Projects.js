// import { projects } from "../../data";
import { deleteProject, getProjects } from "../../api/project";
import { useEffect, useState } from "../../lib";
import axios from "axios";
import HeaderAdmin from "../../components/HeaderAdmin";

export const AdminProjectsPage = () => {

  const [projects, setProjects] = useState([]);

  useEffect( () => {

    (async () => {
      try {
        setProjects(await getProjects());
      } catch (error) {
        console.log(error);
      }
    })();

    // fetch("http://localhost:3000/projects")
    // .then((response) => response.json())
    // .then((data) => setProjects(data))
    // .catch((Error) => console.log(Error));
    // // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // // setData(projects);

  }, []);
 
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
        btn.addEventListener("click", function () {
            const id = this.dataset.id;
            // xóa trên server
           deleteProject(id).then(() => {
                // xóa ở client : reRender
                const newsProject = projects.filter((project) => project.id != id);
                setProjects(newsProject);
            });
        });
    }
  });

  
  return `
  ${HeaderAdmin()}
  <div class="container mt-5">
    <h1>Quản lý dự án</h1>

    <table class="table table-bordered text-center">
        <thead>
        <tr>
            <th>STT</th>
            <th>TÊN DỰ ÁN</th>
            <th>MÔ TẢ</th>
            <th>NGÀY HOÀN THÀNH</th>
            <th>Link Github</th>
            <th>HÌNH ẢNH</th>
            <th></th>
        </tr>

        
        
        </thead>

        <tbody">
        ${projects.map((project, index) => {
          return `
          <tr>
            <td>${index + 1}</td>
            <td>${project.name}</td>
            <td>${project.author}</td>
            <td>${project.date}</td>
            <td>${project.github}</td>
            <td><img src="${project.gallery}" class=" hover:scale-125"></td>

            <td width="150">
            <button data-id="${project.id}" class="btn btn-danger btn-remove">Xóa</button>
            <a href="/admin/Projects/${project.id}/Edit" class="btn btn-danger ">Sửa</a>
            </td>
          </tr>
          `
        })
        .join("")}

        </tbody>
        
    </table>
    <div class="text-center">
      <a href="/admin/ProjectAdd" class="btn btn-danger px-4 py-3 ">Thêm</a>  
    </div>
        
  </div>`;
    
};
export default AdminProjectsPage;
