// 在head 中 加载 必要静态
document.write(
  '<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/mdui@0.4.3/dist/css/mdui.min.css">'
);
// markdown支持
document.write(
  '<script src="//cdn.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js"></script>'
);
document.write(`<style>
body{background-color: #121212;font-family: 'Cairo', sans-serif; direction:rtl;color:#e3e3e3;}
.mdui-appbar .mdui-toolbar{height:56px;font-size:1pc}
.mdui-toolbar>*{padding:0 6px;margin:0 2px}
.mdui-toolbar>i{opacity:.5}.mdui-toolbar>.mdui-typo-headline{padding:0 1pc 0 0}
.mdui-toolbar>i{padding:0}.mdui-toolbar>a:hover,a.active,a.mdui-typo-headline{opacity:1}
.mdui-container{max-width:1500px}.mdui-list-item{transition:none}.mdui-list>
.th{background-color:initial}.mdui-list-item>a{width:100%;line-height:3pc}
.mdui-list-item{margin:2px 0;padding:0}
.mdui-toolbar>a:last-child{opacity:1}@media screen and (max-width:980px){.mdui-list-item .mdui-text-right{display:none}
.mdui-container{width:100%!important;margin:0}.mdui-toolbar>.mdui-typo-headline,.mdui-toolbar>a:last-child,
.mdui-toolbar>i:first-child{display:block}}
.notfound-wrapper{display:flex;justify-content:center;align-items:center;flex-direction:column;height:calc(100vh - 96px);position:relative;bottom:56px}
.notfound-wrapper img{width:100%;height=auto}

.mdui-progress-indeterminate::before { animation: mdui-progress-optimized 2.2s infinite; } .mdui-progress-indeterminate::after { animation: mdui-progress-optimized-short 2.2s infinite; }
@keyframes mdui-progress-optimized { 0% { right: -90%; left: 100% } 60% { right: -90%; left: 100% } to { right: 100%; left: -35% } } @keyframes mdui-progress-optimized-short { 0% { right: -200%; left: 100% } 60% { right: 107%; left: -8% } to { right: 107%; left: -8% } }
.mdui-theme-primary-blue-grey .mdui-color-theme{color: #dadada!important;}
.mdui-textfield-label{color: #9b9b9b!important;transform-origin: right!important;}
.mdui-textfield-input{color: #e4e4e4!important;direction: ltr}
.mdui-textfield-input:not([disabled]):hover{border-bottom: 1px solid rgba(255,255,255,.87)!important;box-shadow: 0 1px 0 0 rgba(255,255,255,.87)!important;}
.mdui-row, [class*=mdui-row-]{background-color: #1e1e1e!important;    margin-top: 10px!important;}
.mdui-list {padding:0!important}
.mdui-list-item>a{display:flex}
.mdui-row ul li a div {direction: ltr}
.mdui-row ul li a div i.mdui-icon.material-icons {float: right; position: relative; top: 50%; transform: translateY(-50%);padding-left: 5px;}
#content{background-color: #1f1f1f; margin-top: 20px;padding: 7px;}
.mdui-img-fluid, .mdui-video-fluid{min-height: 534px;}
nav.navbar.navbar-expand-lg.fixed-top.navbar-dark.bg-dark {
    box-shadow: 1px 1px 4px 1px rgb(0 0 0 / 50%);
    background-color: #121212 !important;
}
.bg-dark{background-color:#303030!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}@media (min-width:992px){.navbar-expand-lg{-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;justify-content:flex-start}}.navbar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding-top:1rem;padding-bottom:1rem}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:-ms-flexbox;display:flex;-ms-flex-wrap:inherit;flex-wrap:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.container{width:100%}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{padding-right:var(--bs-gutter-x, .75rem);padding-left:var(--bs-gutter-x, .75rem);margin-right:auto;margin-left:auto}.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{width:100%}.navbar-dark .navbar-brand{color:#fff}a.navbar-brand{display:none}.navbar-brand{padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;text-decoration:none;white-space:nowrap}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.6);border-color:rgba(255,255,255,.1)}@media (min-width:992px){.navbar-expand-lg .navbar-toggler{display:none}}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem;transition:box-shadow .15s ease-in-out}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}button,select{text-transform:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button{border-radius:0}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-repeat:no-repeat;background-position:center;background-size:100%}@media (min-width:992px){.navbar-expand-lg .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}}.collapse:not(.show){display:none}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}@media (min-width:992px){.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;flex-direction:row}.mb-lg-0{margin-bottom:0!important}}.mb-2{margin-bottom:.5rem!important}.me-auto{margin-right:auto!important}.navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol,ul{padding-left:2rem}@media (min-width:992px){.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}}.dropdown,.dropend,.dropstart,.dropup{position:relative}@media (min-width:992px){.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}}.dropdown-toggle{white-space:nowrap}[role=button]{cursor:pointer}@media (min-width:992px){.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}}.navbar-nav .dropdown-menu{position:static}.dropdown-menu{position:absolute;z-index:1000;display:none;min-width:10rem;padding:.5rem 0;margin:0;font-size:1rem;color:#fff;list-style:none;background-clip:padding-box;border-radius:.25rem}.dropdown-item,.nav-link{display:block;text-decoration:none}.dropdown-item{width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#fff;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.6)}@media (min-width:992px){.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}}.navbar-nav .nav-link{padding-right:0;padding-left:0}.nav-link{padding:.5rem 2rem;color:#00bc8c;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}#header-inner{margin:0;padding:0}img.custom-logo{filter:none}img,svg{vertical-align:middle}body{background:#121212}body>header{direction:rtl;margin-bottom:0}body,body>div,body>header{font-family:"Modern Antiqua","El Messiri",sans-serif!important}nav.navbar.navbar-expand-lg.fixed-top.navbar-dark.bg-dark{box-shadow:1px 1px 4px 1px rgb(0 0 0/50%);background-color:#121212!important}.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;flex-direction:row;width:100%}.container-fluid{width:100%}.navbar-dark .navbar-nav .nav-link{font-size:18px}.navbar-brand img{width:180px;position:fixed;top:13px;right:25px}form.d-flex{display:none!important}.container>div#select_items{width:100%;padding:0!important;max-width:100%!important;margin:auto auto 20px}div#content{padding-top:0!important;margin-top:0}.alert-primary{background-color:#161616;box-shadow:1px 1px 4px 1px rgb(0 0 0/50%)}.breadcrumb{background-color:#121212}.breadcrumb,.text-break{box-shadow:1px 1px 4px 1px rgb(0 0 0/50%)}.list-group-item{background-color:#161616;border:1px solid #121212}.alert-secondary,.dropdown-menu{background-color:#161616;box-shadow:1px 1px 4px 1px rgb(0 0 0/50%)}.dropdown-menu{text-align:right;background-color:#121212;border:0}@media screen and (min-width:0px) and (max-width:991px){.navbar-brand img{width:180px;position:fixed;top:13px;right:25px;display:none}.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;flex-direction:column;width:100%;margin-right:0!important;padding:0;margin-top:10px}}.ct-wrapper{padding:0 15px;position:relative;max-width:1180px;width:auto;margin:80px auto 0}.logo-wrapper{display:inline-block;float:none;text-align:center}img.custom-logo{width:auto;max-width:70%;height:auto;filter:drop-shadow(0 0 2px #fff)}img{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdui-theme-primary-blue-grey .mdui-color-theme{color:#fff!important;background-color:transparent!important}header.mdui-appbar.mdui-color-theme{box-shadow:none;}div#folder{background: #1e1e1e;height: 50px;max-height: 40px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
@media screen and (min-width:980px) and (max-width:768px){
div#folder {
    background: #1e1e1e;
    height: 50px;
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: normal;
    margin: auto !important;
}
#folder a {
    width: 100% !important;
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    text-align: right;
}
}
</style>`);

// 初始化页面，并载入必要资源
function init() {
  document.siteName = $("title").html();
  $("body").addClass("mdui-theme-primary-blue-grey mdui-theme-accent-blue");
  var html = `
<header class="mdui-appbar mdui-color-theme" style="position: relative"> 
    <div id="nav">
       <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div class="container-fluid">
             <a class="navbar-brand" href="/"><img border="0" alt="AnimeSan" src="" height="" width="100px"></a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                   <li class="nav-item">
                      <a class="nav-link" href="/0:/">الرئيسية</a>
                   </li>
                   <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">الأعمال</a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="الأعمال%20الحالية/">الحالية</a><a class="dropdown-item" href="الأعمال%20المكتملة/">المكتملة</a></div>
                   </li>
                   <li class="nav-item">
                      <a class="nav-link" href="https://www.anime-san.com" target="_blank">الموقع</a>
                   </li>
                </ul>
             </div>
          </div>
       </nav>
       <div class="ct-wrapper">
          <div class="header logo-wrapper section" id="Logo-section">
             <div id="header-inner">
                <a href="https://www.anime-san.com" class="custom-logo-link" rel="home" aria-current="page">
                <img width="1200" height="500" src="https://i.imgur.com/e5LyOa8.png" class="custom-logo" alt="AnimeSan DDL" decoding="async" fetchpriority="high">
                </a> 
             </div>
          </div>
       </div>
    </div>
</header>

<div id="content" class="mdui-container"> 
</div>
	`;
  $("body").html(html);
}

function render(path) {
  if (path.indexOf("?") > 0) {
    path = path.substr(0, path.indexOf("?"));
  }
  title(path);
  nav(path);
  if (path.substr(-1) == "/") {
    list(path);
  } else {
    file(path);
  }
}

// 渲染 title
function title(path) {
  path = decodeURI(path);
  $("title").html(document.siteName + " - " + path);
}

// 渲染导航栏
function nav(path) {
  var html = `
       <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div class="container-fluid">
             <a class="navbar-brand" href="/"><img border="0" alt="AnimeSan" src="" height="" width="100px"></a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                   <li class="nav-item">
                      <a class="nav-link" href="">الرئيسية</a>
                   </li>
                   <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">الأعمال</a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/الأعمال%20الحالية/">الحالية</a>
                        <a class="dropdown-item" href="/الأعمال%20المكتملة/">المكتملة</a>
                      </div>
                   </li>
                   <li class="nav-item">
                      <a class="nav-link" href="https://www.anime-san.com" target="_blank">الموقع</a>
                   </li>
                </ul>
                <form class="d-flex" method="get" action="/0:search">
                   <input class="form-control me-2" name="q" type="search" placeholder="Search" aria-label="Search" value="" required="">
                   <button class="btn btn-danger" onclick="if($('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit">Search</button>
                </form>
             </div>
          </div>
       </nav>
       <div class="ct-wrapper">
          <div class="header logo-wrapper section" id="Logo-section">
             <div id="header-inner">
                <a href="https://www.anime-san.com" class="custom-logo-link" rel="home" aria-current="page">
                <img width="1200" height="500" src="https://i.imgur.com/e5LyOa8.png" class="custom-logo" alt="AnimeSan DDL" decoding="async" fetchpriority="high">
                </a> 
             </div>
          </div>
       </div>
  `;

  html += `<div id="folder" class="mdui-container">`;
  html += `<a href="/" dir="auto" class="mdui-typo-headline folder">${document.siteName}</a>`;
  
  var arr = path.trim("/").split("/");
  var p = "/";
  if (arr.length > 0) {
    for (var i in arr) {
      var n = arr[i];
      n = decodeURI(n);
      if (/.*(\..+$)/i.test(n)) {
        p += n + "?a=view";
      } else {
        p += n + "/";
      }
      if (n == "") {
        break;
      }
      html += `<div><i class="mdui-icon material-icons mdui-icon-dark folder" style="margin:0;transform:rotate(180deg);">chevron_right</i><a dir="auto" class="folder" href="${p}">${n}</a></div>`;
    }
  }
  
  html += `</div>`;
  
  $("#nav").html(html);
}

// 渲染文件列表
function list(path) {
  var content = `
	<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>

	 <div class="mdui-row"> 
	  <ul class="mdui-list"> 
	   <li class="mdui-list-item th"> 
	    <div class="mdui-col-xs-12 mdui-col-sm-7">
	     الاسم
	<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>
	    </div> 
	    <div class="mdui-col-sm-3 mdui-text-right">
	     تاريخ آخر تعديل
	<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>
	    </div> 
	    <div class="mdui-col-sm-2 mdui-text-right">
	     حجم الملف
	<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>
	    </div> 
      <div class="mdui-col-sm-2 mdui-text-right">
      الوظائف
 <i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>
     </div> 
	    </li> 
	  </ul> 
	 </div> 
	 <div class="mdui-row"> 
	  <ul id="list" class="mdui-list"> 
	  </ul> 
	 </div>
	 <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>
	`;
  $("#content").html(content);

  $("#list").html(
    `<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>`
  );
  $("#readme_md").hide().html("");
  $("#head_md").hide().html("");
  $.post(path, function (data, status) {
    var obj = data;
    if (typeof obj === "object") {
      list_files(path, obj.files);
    } else if (typeof obj === "string") {
      notfound();
    }
  });
}

function list_files(path, files) {
  html = "";

  for (i in files) {
    var item = files[i];
    var p = path + item.name + "/";
    if (item["size"] == undefined) {
      item["size"] = "";
    }

    item["modifiedTime"] = utc2beijing(item["modifiedTime"]);
    item["size"] = formatFileSize(item["size"]);
    if (item["mimeType"] == "application/vnd.google-apps.folder") {
      html += `<li class="mdui-list-item mdui-ripple"><a href="${p}" class="folder">
	            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">
	            <i class="mdui-icon material-icons">folder_open</i>
	              ${item.name}
	            </div>
	            <div class="mdui-col-sm-3 mdui-text-right">${item["modifiedTime"]}</div>
	            <div class="mdui-col-sm-2 mdui-text-right">${item["size"]}</div>
	            </a>
              <div class="mdui-col-sm-2 mdui-text-right dummyclass">
              <button onclick="(function setClipboard(value) {var tempInput = document.createElement('input');tempInput.style = 'position: absolute; left: -1000px; top: -1000px';tempInput.value = value;document.body.appendChild(tempInput);tempInput.select();document.execCommand('copy');document.body.removeChild(tempInput);})(window.location.protocol + '//' + window.location.hostname + '${p}')" class="mdui-textfield-icon mdui-btn mdui-btn-icon dummyclass" style="float: right;">
              <i class="mdui-icon material-icons dummyclass">content_copy</i>
            </button>
	              <button onclick="window.open('${p}','_blank')" class="mdui-textfield-icon mdui-btn mdui-btn-icon dummyclass" style="float: right;">
                  <i class="mdui-icon material-icons dummyclass">launch</i>
                </button>
              </div>
	        </li>`;
    } else {
      var p = path + item.name;
      var ddl_link = p;
      var c = "file";
      if (item.name == "README.md") {
        get_file(p, item, function (data) {
          markdown("#readme_md", data);
        });
      }
      if (item.name == "HEAD.md") {
        get_file(p, item, function (data) {
          markdown("#head_md", data);
        });
      }
      var ext = p.split(".").pop();
      if (
        "|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(
          `|${ext}|`
        ) >= 0
      ) {
        p += "?a=view";
        c += " view";
      }
      html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${item.mimeType}" href="${p}" class="${c}">
	          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">
	          <i class="mdui-icon material-icons">insert_drive_file</i>
	            ${item.name}
	          </div>
	          <div class="mdui-col-sm-3 mdui-text-right">${item["modifiedTime"]}</div>
	          <div class="mdui-col-sm-2 mdui-text-right">${item["size"]}</div>
	          </a>
            <div class="mdui-col-sm-2 mdui-text-right dummyclass">
            <button onclick="(function setClipboard(value) {var tempInput = document.createElement('input');tempInput.style = 'position: absolute; left: -1000px; top: -1000px';tempInput.value = value;document.body.appendChild(tempInput);tempInput.select();document.execCommand('copy');document.body.removeChild(tempInput);})(window.location.protocol + '//' + window.location.hostname + '${ddl_link}')" class="mdui-textfield-icon mdui-btn mdui-btn-icon dummyclass" style="float: right;">
            <i class="mdui-icon material-icons dummyclass">content_copy</i>
          </button>
          <button onclick="window.open('${p}','_blank')" class="mdui-textfield-icon mdui-btn mdui-btn-icon dummyclass" style="float: right;">
          <i class="mdui-icon material-icons dummyclass">launch</i>
        </button>
            <button onclick="window.open('${ddl_link}','_self')" class="mdui-textfield-icon mdui-btn mdui-btn-icon dummyclass" style="float: right;">
              <i class="mdui-icon material-icons dummyclass">file_download</i>
            </button>
          </div>
	      </li>`;
    }
  }
  $("#list").html(html);
}

function notfound() {
  html = `
  <div class="notfound-wrapper">
    <h2>هذا المسار غير موجود</h2>
    <div>
      <img src="https://i.pinimg.com/originals/53/85/c5/5385c524bf8a07f2758a056332e80c6b.gif">
    </div>
  </div>
  `;

  $("#content").html(html);
}

function get_file(path, file, callback) {
  var key = "file_path_" + path + file["modifiedTime"];
  var data = localStorage.getItem(key);
  if (data != undefined) {
    return callback(data);
  } else {
    $.get(path, function (d) {
      localStorage.setItem(key, d);
      callback(d);
    });
  }
}

// 文件展示 ?a=view
function file(path) {
  var name = path.split("/").pop();
  var ext = name.split(".").pop().toLowerCase().replace(`?a=view`, "");
  if ("|html|php|css|go|java|js|json|txt|sh|md|".indexOf(`|${ext}|`) >= 0) {
    return file_code(path);
  }

  if ("|mp4|webm|avi|".indexOf(`|${ext}|`) >= 0) {
    return file_video(path);
  }

  if ("|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
    return file_video(path);
  }

  if ("|mp3|wav|ogg|m4a|".indexOf(`|${ext}|`) >= 0) {
    return file_audio(path);
  }

  if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
    return file_image(path);
  }
}

// 文件展示 |html|php|css|go|java|js|json|txt|sh|md|
function file_code(path) {
  var type = {
    html: "html",
    php: "php",
    css: "css",
    go: "golang",
    java: "java",
    js: "javascript",
    json: "json",
    txt: "Text",
    sh: "sh",
    md: "Markdown",
  };
  var name = path.split("/").pop();
  var ext = name.split(".").pop();
  var href = window.location.origin + path;
  var content = `
<div class="mdui-container">
<pre id="editor" ></pre>
</div>
<div class="mdui-textfield">
	<label class="mdui-textfield-label">رابط التحميل</label>
	<input class="mdui-textfield-input" type="text" value="${href}"/>
</div>
<a href="${href}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>

<script src="https://cdn.staticfile.org/ace/1.4.7/ace.js"></script>
<script src="https://cdn.staticfile.org/ace/1.4.7/ext-language_tools.js"></script>
	`;
  $("#content").html(content);

  $.get(path, function (data) {
    $("#editor").html($("<div/>").text(data).html());
    var code_type = "Text";
    if (type[ext] != undefined) {
      code_type = type[ext];
    }
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/ambiance");
    editor.setFontSize(18);
    editor.session.setMode("ace/mode/" + code_type);

    //Autocompletion
    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
      maxLines: Infinity,
    });
  });
}

// 文件展示 视频 |mp4|webm|avi|
function file_video(path) {
  var url = window.location.origin + path;
  var playBtn = `<a class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" href="vlc://${url}">شاهد على VLC <i class="mdui-icon material-icons">&#xe038;</i></a>`;
  if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
    //移动端
    playBtn = `	<a class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" href="intent:${url}#Intent;package=com.mxtech.videoplayer.ad;S.title=${path};end"><i class="mdui-icon material-icons">&#xe039;</i>شاهد على MXPLAYER</a>`;
  }
  var content = `
<div class="mdui-container-fluid">
	<br>
	<video class="mdui-video-fluid mdui-center" preload controls>
	  <source src="${url}" type="video/mp4">
	</video>
	<br>${playBtn}
	<!-- 固定标签 -->
	<div class="mdui-textfield">
	  <label class="mdui-textfield-label">رابط التحميل</label>
	  <input class="mdui-textfield-input" type="text" value="${url}"/>
	</div>
</div>
<a href="${url}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>
	`;
  $("#content").html(content);
}

// 文件展示 音频 |mp3|m4a|wav|ogg|
function file_audio(path) {
  var url = window.location.origin + path;
  var content = `
<div class="mdui-container-fluid">
	<br>
	<audio class="mdui-center" preload controls>
	  <source src="${url}"">
	</audio>
	<br>
	<!-- 固定标签 -->
	<div class="mdui-textfield">
	  <label class="mdui-textfield-label">رابط التحميل</label>
	  <input class="mdui-textfield-input" type="text" value="${url}"/>
	</div>
</div>
<a href="${url}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>
	`;
  $("#content").html(content);
}

// 图片展示
function file_image(path) {
  var url = window.location.origin + path;
  var content = `
<div class="mdui-container-fluid">
	<br>
	<img class="mdui-img-fluid" src="${url}"/>
	<br>
	<div class="mdui-textfield">
	  <label class="mdui-textfield-label">رابط التحميل</label>
	  <input class="mdui-textfield-input" type="text" value="${url}"/>
	</div>
	<div class="mdui-textfield">
	  <label class="mdui-textfield-label">HTML 引用</label>
	  <input class="mdui-textfield-input" type="text" value="<img src='${url}' />"/>
	</div>
        <div class="mdui-textfield">
	  <label class="mdui-textfield-label">Markdown 引用地址</label>
	  <input class="mdui-textfield-input" type="text" value="![](${url})"/>
	</div>
        <br>
</div>
<a href="${url}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>
	`;
  $("#content").html(content);
}

//时间转换
function utc2beijing(utc_datetime) {
  // 转为正常的时间格式 年-月-日 时:分:秒
  var T_pos = utc_datetime.indexOf("T");
  var Z_pos = utc_datetime.indexOf("Z");
  var year_month_day = utc_datetime.substr(0, T_pos);
  var hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1);
  var new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06

  // 处理成为时间戳
  timestamp = new Date(Date.parse(new_datetime));
  timestamp = timestamp.getTime();
  timestamp = timestamp / 1000;

  // 增加8个小时，北京时间比utc时间多八个时区
  var unixtimestamp = timestamp + 8 * 60 * 60;

  // 时间戳转为时间
  var unixtimestamp = new Date(unixtimestamp * 1000);
  var year = 1900 + unixtimestamp.getYear();
  var month = "0" + (unixtimestamp.getMonth() + 1);
  var date = "0" + unixtimestamp.getDate();
  var hour = "0" + unixtimestamp.getHours();
  var minute = "0" + unixtimestamp.getMinutes();
  var second = "0" + unixtimestamp.getSeconds();
  return (
    year +
    "-" +
    month.substring(month.length - 2, month.length) +
    "-" +
    date.substring(date.length - 2, date.length) +
    " " +
    hour.substring(hour.length - 2, hour.length) +
    ":" +
    minute.substring(minute.length - 2, minute.length) +
    ":" +
    second.substring(second.length - 2, second.length)
  );
}

// bytes自适应转换到KB,MB,GB
function formatFileSize(bytes) {
  if (bytes >= 1000000000) {
    bytes = (bytes / 1000000000).toFixed(2) + " GB";
  } else if (bytes >= 1000000) {
    bytes = (bytes / 1000000).toFixed(2) + " MB";
  } else if (bytes >= 1000) {
    bytes = (bytes / 1000).toFixed(2) + " KB";
  } else if (bytes > 1) {
    bytes = bytes + " bytes";
  } else if (bytes == 1) {
    bytes = bytes + " byte";
  } else {
    bytes = "";
  }
  return bytes;
}

String.prototype.trim = function (char) {
  if (char) {
    return this.replace(
      new RegExp("^\\" + char + "+|\\" + char + "+$", "g"),
      ""
    );
  }
  return this.replace(/^\s+|\s+$/g, "");
};

// README.md HEAD.md 支持
function markdown(el, data) {
  if (window.md == undefined) {
    //$.getScript('https://cdn.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js',function(){
    window.md = window.markdownit();
    markdown(el, data);
    //});
  } else {
    var html = md.render(data);
    $(el).show().html(html);
  }
}

// 监听回退事件
window.onpopstate = function () {
  var path = window.location.pathname;
  render(path);
};

$(function () {
  init();
  var path = window.location.pathname;
  $("body").on("click", ".folder", function () {
    var url = $(this).attr("href");
    history.pushState(null, null, url);
    render(url);
    return false;
  });

  $("body").on("click", ".view", function () {
    var url = $(this).attr("href");
    history.pushState(null, null, url);
    render(url);
    return false;
  });

  render(path);
});
