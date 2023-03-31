export default function handler(req, res) {
  
  fetch("https://api.github.com/users/regliss/repos", {
    headers: {
      "Accept":"application/vnd.github+json",
      "Authorization":`Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      "X-GitHub-Api-Version":"2022-11-28"
    }
  }).then(res=>res.json())
  .then(data=>{
    res.send(data)
  })
  .catch(()=>{
    console.log(err);
    res.send(err);
  });

}
