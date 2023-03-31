export default function handler(req, res) {
  
    const query = req.query;
    const { repo } = query;
    console.log(repo);
    fetch(`https://api.github.com/repos/regliss/${repo}/languages`, {
      headers: {
        "Accept":"application/vnd.github+json",
        "Authorization":"Bearer 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",
        "X-GitHub-Api-Version":"2022-11-28"
      }
    }).then(res=>res.json())
    .then(data=>{
      console.log(data);
      res.send(data)
    })
    .catch(()=>{
      console.log(err);
      res.send(err);
    });
  
  }
  