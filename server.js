const express = required('express'),
path = require('path');
const app =express();
app.use(express.static('./dist/myapp'));
app.get("/*", (req,res)=>{
res.sendFile(path.join(_dirname, '/dist/myapp/index.html'));
});
app.listen(process.env.PORT || 8080);

