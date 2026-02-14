import { blogService } from "@/services/blog.service";

export default async function Home() {
  const {data} =await blogService.getBlogPost()
       console.log("take blog data" ,data)
  return (
    <div>
      <h2>THis is home page </h2>
    </div>
  );
}
