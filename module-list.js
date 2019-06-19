(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "projects":                     {url:"$H/m/projects.html"},
        
        "module-editor":        {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
