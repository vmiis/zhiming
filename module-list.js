(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "projects":             {url:"$H/m/projects.html",router:1},
        "demo":                 {url:"$H/m/demo.html"},
        //"module-editor":        {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1},
        
        "body-mass-index":              {url:"$H/d/body-mass-index.html",router:1},
        "epworth-sleepiness-scale":     {url:"$H/d/epworth-sleepiness-scale.html",router:1},
        "prices":  		  	  			{url:"$H/d/prices.html",router:1,name:"Our gym prices",tags:"marketing"},
        "price-02":  		  	 		{url:"$H/d/price-02.html",router:1,name:"Our clinic prices",tags:"marketing"},
        "pie-chart-3d": 	            {url:"$H/d/pie-chart-3d.html",Table:"pie",router:1},
        "trainers":  		  			{url:"$H/d/trainers.html",router:1,name:"Gym Trainers",tags:"marketing"},
        "success-page":  		   		{url:"$H/d/success.html",router:1,tags:"marketing"},
        "fitness":                      {url:"$H/d/fitness.html",router:1},
        "portfolio":	                {url:"$H/d/portfolio.html",router:1,tags:"marketing"},
        "page-01":	                    {url:"$H/d/page-01.html",router:1,tags:'blog'},
        "page-04":	                    {url:"$H/d/page-04.html",router:1,tags:'blog'},
        "welcome":  		  	  		{url:"$H/d/welcome.html",router:1,tags:'marketing'},
        "structure2":	                {url:"$H/d/structure.html",router:1},
        "contact-us-form-02":  			{url:"$H/d/contact-us-form-02.html",Table:"ccontact-us-vm",tags:'marketing'},
        "aaxsys-panel":                 {url:"$H/d/aaxsys-panel.html",router:1},
        "flat-trial":    			    {url:"$H/d/flat-trial.html",router:1},
        "column-chart-panel":           {url:"$H/d/column-chart-panel.html",Table:"column",form_module:"column-form",router:1},
        "particle-panel":  	  			{url:"$H/d/particle-panel.html",router:1},
        "image-with-title-on-hover": 	                            {url:"$H/d/image-with-title-on-hover.html",router:1},
        "image-and-title-with-scale-rotate-effect-on-hover": 	    {url:"$H/d/image-and-title-with-scale-rotate-effect-on-hover.html",router:1},
        "image-with-title-and-subtitle-on-hover": 	                {url:"$H/d/image-with-title-and-subtitle-on-hover.html",router:1},
        "c_services":  	  	  			{url:"$H/d/services.html",router:1},


        "workflow":                         {url:"$H/d/bookkeeping/home.html",router:1,name:"Bookkeeping",tags:"bookkeeping,finance"},
        "predefined-transaction-item-data": {url:"$H/d/bookkeeping/predefined-transaction-item-data.html",Table:"predefined-transaction-item",form_module:"predefined-transaction-item-form",router:1,tags:"bookkeeping"},
        "predefined-transaction-item-form": {url:"$H/d/bookkeeping/predefined-transaction-item-form.html",Table:"predefined-transaction-item",router:1,tags:"bookkeeping"},
        
        "transaction-y-q-tax-return-data":  {url:"$H/d/bookkeeping/transaction-year-quarter-tax-return-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        "transaction-y-q-bas-data":    		{url:"$H/d/bookkeeping/transaction-year-quarter-bas-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        "transaction-y-q-data":    		    {url:"$H/d/bookkeeping/transaction-year-quarter-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        
        "transaction-bas-data":   		    {url:"$H/d/bookkeeping/transaction-bas-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        "transaction-tax-return-data":      {url:"$H/d/bookkeeping/transaction-tax-return-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        "transaction-data":    			    {url:"$H/d/bookkeeping/transaction-data.html",Table:"transaction",form_module:"transaction-form",router:1,tags:"bookkeeping"},
        "transaction-form":    			    {url:"$H/d/bookkeeping/transaction-form.html",Table:"transaction",item_table:'predefined-transaction-item',tags:"bookkeeping"},
        "ato-bas-quarter-aggregation-data":     {url:"$H/d/bookkeeping/ato-bas-quarter-aggregation-data.html",Table:"ato-bas-quarter-aggregation",transaction_table:'transaction',form_module:"ato-bas-quarter-aggregation-form",router:1,tags:"bookkeeping"},
        "ato-bas-quarter-aggregation-form":     {url:"$H/d/bookkeeping/ato-bas-quarter-aggregation-form.html",Table:"ato-bas-quarter-aggregation",transaction_table:'transaction',tags:"bookkeeping"},
        "income-expense-month-aggregation-data":{url:"$H/d/bookkeeping/income-expense-month-aggregation-data.html",Table:"income-expense-month-aggregation", transaction_table:'transaction',form_module:"income-expense-month-aggregation-form",router:1,tags:"bookkeeping"},
        "income-expense-month-aggregation-form":{url:"$H/d/bookkeeping/income-expense-month-aggregation-form.html",Table:"income-expense-month-aggregation", transaction_table:'transaction',tags:"bookkeeping"},
        "item-month-aggregation-data":          {url:"$H/d/bookkeeping/item-month-aggregation-data.html",Table:"item-month-aggregation", transaction_table:'transaction',form_module:"item-month-aggregation-form",router:1,tags:"bookkeeping"},
        "item-month-aggregation-form":          {url:"$H/d/bookkeeping/item-month-aggregation-form.html",Table:"item-month-aggregation", transaction_table:'transaction',tags:"bookkeeping"},
        "income-expense-chart":                 {url:"$H/d/bookkeeping/income-expense-chart.html",Table:"income-expense-month-aggregation",router:1,tags:"bookkeeping"},
        "item-chart":                           {url:"$H/d/bookkeeping/item-chart.html",Table:"item-month-aggregation",router:1,tags:"bookkeeping"},

        "event-data":      	  		    {url:"$H/d/event-data.html",Table:"event-vm",form_module:"event-form"},
        "event-form":      	  		    {url:"$H/d/event-form.html",Table:"event-vm"},         
        "event-daily":      	 	    {url:"$H/d/event-daily.html",Table:"event-vm",router:1,
                                            event_form:"event-form"
                                        },         
        "event-monthly":      	 	    {url:"$H/d/event-monthly.html",Table:"event-vm",router:1,
                                            event_daily:"event-daily",
                                            event_form:"event-form"
                                        },         
        "event-panel":      	 	    {url:"$H/d/event-panel.html",Table:"event-vm",router:1,
                                            event_daily:"event-daily",
                                            form_module:"event-form"
                                        },   
                                        
                                        
        "document-data":	 	        {url:"$H/d/document-data.html",Table:"document-demo",form_module:"document-form",router:1},
        "document-form":	 	        {url:"$H/d/document-form.html",Table:"document-demo"},
        "document-panel":	 	        {url:"$H/d/document-panel.html",Table:"document-demo",form_module:"document-form",router:1},
        "document-page":	 	        {url:"$H/d/document-page.html",Table:"document-demo",router:1},

        "survey-data":      	  		{url:"$H/d/survey-data.html",Table:"survey-vm",form_module:"survey-form"},
        "survey-form":      	  		{url:"$H/d/survey-form.html",Table:"survey-vm"},         
        "survey-panel":      	  		{url:"$H/d/survey-panel.html",Table:"survey-vm"},         

        "food-data":    			    {url:"$H/d/food-data.html",Table:"food-demo",form_module:"food-form"},
        "food-form":    			    {url:"$H/d/food-form.html",Table:"food-demo"},
        "food-special":    			    {url:"$H/d/food-special.html",form_module:"food-form",router:1},

        "first-aid-officer-data":    	{url:"$H/d/first-aid-officer-data.html",Table:"first-aid-officer-demo",form_module:"first-aid-officer-form",router:1},
        "first-aid-officer-form":    	{url:"$H/d/first-aid-officer-form.html",Table:"first-aid-officer-demo"},
        "first-aid-officer-panel":      {url:"$H/d/first-aid-officer-panel.html",router:1},

    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
