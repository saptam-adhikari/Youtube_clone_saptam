const API ="AIzaSyAu9fpD-EJfI38Yb-jjevD-m4mZhJ2_Kek"
const searchMovies = async()=>{
    try{
        const q = document.getElementById("query").value;

        const res = await fetch(
            ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}&key=${API}`
        );
        const data = await res.json();
        console.log(data.items);
        append(data.items);

    }catch(err){
        console.log(err);
    }
     
}

const append = (videos)=>{
    videos.forEach(({id:{videoId},snippet:{title}})=>{
        let div = document.createElement("div");
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.width = "100%";
        iframe.height = "100%";


        let name = document.createElement("h5");
        name.innerText = title;

        div.append(iframe,name)
        let data = {
            title,
            videoId
        };
        div.onclick=()=>{
            showVideos(data);
        }

        show_videos.append(div);

    })
}

const showVideos =(x)=>{
    window.location.href="video.html";
    localStorage.setItem("videos",JSON.stringify(x));

}