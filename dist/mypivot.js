$(function(){
	initPivot();
});

function initPivot(){
	var sumNumAndPrintString = $.pivotUtilities.aggregatorTemplates.sumNumAndPrintString;
    var numberFormat = $.pivotUtilities.numberFormat;
    var intFormat = numberFormat({digitsAfterDecimal: 1}); //数据显示的格式化 可选项：suffix:"元" thousandsSep:" ", decimalSep:","
    
    var rawData = [ 
					{year:"2014",month: "1月", art: "余额",  value: 10},
					{year:"2014",month: "2月", art: "余额",  value: 10},
					{year:"2014",month: "1月", art: "借或贷",  value: "借"},
					//{year:"2014",month: "1月", art: "借或贷",  value: "贷"},
					{year:"2014",month: "2月", art: "借或贷",  value: "贷"},
                   
	                {year:"2014",month: "1月", art: "费用明细", type:1, mixtype:"直接从事研发活动人员", mixtype2:"工资薪金", value: 1},
	                {year:"2014",month: "1月", art: "费用明细", type:1, mixtype:"直接从事研发活动人员", mixtype2:"五险一金", value: 2},
	                {year:"2014",month: "1月", art: "费用明细", type:1, mixtype:"外聘研发人员的劳务费", value: 3},
	                {year:"2014",month: "1月", art: "费用明细", type:2, mixtype:"研发活动直接消耗", mixtype2:"材料", value: 4},
	                {year:"2014",month: "1月", art: "费用明细", type:2, mixtype:"研发活动直接消耗", mixtype2:"燃料", value: 5},
	                {year:"2014",month: "1月", art: "费用明细", type:2, mixtype:"研发活动直接消耗", mixtype2:"动力费用", value: 6},
	                {year:"2014",month: "1月", art: "费用明细", type:2, mixtype:"用于中间试验和产品试制的模具、工艺装备开发及制造费", value: 7},
	                {year:"2014",month: "1月", art: "费用明细", type:2, mixtype:"用于不构成固定资产的样品、样机及一般测试手段购置费", value: 8},
	                {year:"2014",month: "1月", art: "费用明细", type:2, mixtype:"用于试制产品的检验费", value: 9},
	                {year:"2014",month: "1月", art: "费用明细", type:2, mixtype:"用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用", value: 10},
	                {year:"2014",month: "1月", art: "费用明细", type:2, mixtype:"通过经营租赁方式租入的用于研发活动的仪器、设备租赁费", value: 11},
	                {year:"2014",month: "1月", art: "费用明细", type:3, mixtype:"用于研发活动的仪器的折旧费", value: 12},
	                {year:"2014",month: "1月", art: "费用明细", type:3, mixtype:"用于研发活动的设备的折旧费", value: 13},
	                {year:"2014",month: "1月", art: "费用明细", type:4, mixtype:"用于研发活动的软件的摊销费用", value: 14},
	                {year:"2014",month: "1月", art: "费用明细", type:4, mixtype:"用于研发活动的专利权的摊销费用", value: 15},
	              
	                {year:"2014",month: "2月", art: "费用明细", type:1, mixtype:"直接从事研发活动人员", mixtype2:"工资薪金", value: 16},
	                {year:"2014",month: "2月", art: "费用明细", type:1, mixtype:"直接从事研发活动人员", mixtype2:"五险一金", value: 17},
	                {year:"2014",month: "2月", art: "费用明细", type:1, mixtype:"外聘研发人员的劳务费", value: 18},
	                {year:"2014",month: "2月", art: "费用明细", type:2, mixtype:"研发活动直接消耗", mixtype2:"材料", value: 19},
	                {year:"2014",month: "2月", art: "费用明细", type:2, mixtype:"研发活动直接消耗", mixtype2:"燃料", value: 20},
	                {year:"2014",month: "2月", art: "费用明细", type:2, mixtype:"研发活动直接消耗", mixtype2:"动力费用", value: 21},
	                {year:"2014",month: "2月", art: "费用明细", type:2, mixtype:"用于中间试验和产品试制的模具、工艺装备开发及制造费", value: 22},
	                {year:"2014",month: "2月", art: "费用明细", type:2, mixtype:"用于不构成固定资产的样品、样机及一般测试手段购置费", value: 23},
	                {year:"2014",month: "2月", art: "费用明细", type:2, mixtype:"用于试制产品的检验费", value: 24},
	                {year:"2014",month: "2月", art: "费用明细", type:2, mixtype:"用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用", value: 25},
	                {year:"2014",month: "2月", art: "费用明细", type:2, mixtype:"通过经营租赁方式租入的用于研发活动的仪器、设备租赁费", value: 26},
	                {year:"2014",month: "2月", art: "费用明细", type:3, mixtype:"用于研发活动的仪器的折旧费", value: 27},
	                {year:"2014",month: "2月", art: "费用明细", type:3, mixtype:"用于研发活动的设备的折旧费", value: 28},
	                {year:"2014",month: "2月", art: "费用明细", type:4, mixtype:"用于研发活动的软件的摊销费用", value: 29},
	                {year:"2014",month: "2月", art: "费用明细", type:4, mixtype:"用于研发活动的专利权的摊销费用", value: 30},
	                
	                {year:"2014",month: "2月", art: "费用明细", type:1, mixtype:"直接从事研发活动人员", mixtype2:"工资薪金", value: 10},
	                {year:"2014",month: "2月", art: "费用明细", type:1, mixtype:"直接从事研发活动人员", mixtype2:"五险一金", value: 10},
	                {year:"2014",month: "2月", art: "费用明细", type:1, mixtype:"外聘研发人员的劳务费", value: 10}
	                
	                
	              ];
    
//    var dataTransform = function(callback){
//    	rawData.forEach(function(element, index) {
//    		callback({
//    			"年份": element.year,
//    			"月份": element.month,
//    			"2014": element.art,
//    			"大类": element.type,
//    			"小类": element.mixtype,
//    			"细项": element.mixtype2,
//    			"value" : element.value
//    		});
//    	})
//    }
    
    var nameDict = {
    	1: "一、人员人工费用",
    	2: "二、直接投入费用",
    	3: "三、折旧费用",
    	4: "四、无形资产摊销",
    }
    

	$("#output").pivot(
				rawData,
	            {
	                rows: ["年份","月份"],
	                cols: ["2014年度","大类","小类","细项"],
	                aggregator: sumNumAndPrintString(intFormat)(["value"]),//sum(intFormat)(["value"])
	                rendererName: "Table",
					showColTotal: false,
	                rendererOptions:{table:{
	                	                     renderCell:function(){//自定义的渲染方法 filter筛选单元格，method是渲染方法
	                	                    	return [{
														filter:{"2014年度":"费用明细",
																"大类":"二、直接投入费用",
																"小类":"用于中间试验和产品试制的模具、工艺装备开发及制造费"},
														method:function(src, records, value, filters, rows, pivotData){
															var my_value = rows[6].value * rows[7].value;
															pivotData.setColValue(src, my_value);
															return src;
														}
	                	                      		}
													]
	                	                     },
	                						 clickCallback:function(e, value, filters, pivotData){
							                	var names = [];
						                        pivotData.forEachMatchingRecord(filters,
						                            function(record){ names.push(record.value); });
						                        alert(names.join("\n"));
	                						 }
	                					    }
				                     },
	                derivedAttributes:{
	                	"年份": function(record){
	                		return record.year;
	                	},
	                	"月份":function(record){
	                		return record.month;
	                	},
	                	"2014年度":function(record){
	                		return record.art;
	                	},
	                	"大类":function(record){
	                		return nameDict[record.type];
	                	},
	                	"小类":function(record){
	                		return record.mixtype;
	                	},
	                	"细项":function(record){
	                		return record.mixtype2;
	                	}	                	
	                }
	            },"zh"
	        );
};

var table2Excel = (function(){
	var uri = "data:application/vnd.ms-excel;base64,"
	var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" ' +
				   'xmlns="http://www.w3.org/TR/REC-html40"> ' +
				   '<head>' + 
				   '<!--[if gte mso 9]>' +
				   '<xml>' + 
				     '<x:ExcelWorkbook>'+
				     	'<x:ExcelWorksheets>' + 
				     		'<x:ExcelWorksheet>' + 
				     			'<x:Name>{worksheet}</x:Name>' + 
				     			'<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>'+
				     		'</x:ExcelWorksheet>'+
				     	'</x:ExcelWorksheets>' +
				     '</x:ExcelWorkbook>'+
				   '</xml><![endif]-->'+
			       '<style type="text/css">' +
			       '.pvtUi{color:#333}table.pvtTable{font-size:8pt;text-align:left;border-collapse:collapse}table.pvtTable tbody tr th,table.pvtTable thead tr th{background-color:#e6EEEE;border:1px solid #CDCDCD;font-size:8pt;padding:5px}table.pvtTable .pvtColLabel{text-align:center}table.pvtTable .pvtTotalLabel{text-align:right}table.pvtTable tbody tr td{color:#3D3D3D;padding:5px;background-color:#FFF;border:1px solid #CDCDCD;vertical-align:top;text-align:right}.pvtGrandTotal,.pvtTotal{font-weight:700}.pvtVals{text-align:center;white-space:nowrap}.pvtColOrder,.pvtRowOrder{cursor:pointer;width:15px;margin-left:5px;display:inline-block}.pvtAggregator{margin-bottom:5px}.pvtAxisContainer,.pvtVals{border:1px solid gray;background:#EEE;padding:5px;min-width:20px;min-height:20px;user-select:none;-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.pvtAxisContainer li{padding:8px 6px;list-style-type:none;cursor:move}.pvtAxisContainer li.pvtPlaceholder{-webkit-border-radius:5px;padding:3px 15px;-moz-border-radius:5px;border-radius:5px;border:1px dashed #aaa}.pvtAxisContainer li span.pvtAttr{-webkit-text-size-adjust:100%;background:#F3F3F3;border:1px solid #DEDEDE;padding:2px 5px;white-space:nowrap;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.pvtTriangle{cursor:pointer;color:grey}.pvtHorizList li{display:inline}.pvtVertList{vertical-align:top}.pvtFilteredAttribute{font-style:italic}.pvtFilterBox{z-index:100;width:300px;border:1px solid gray;background-color:#fff;position:absolute;text-align:center}.pvtFilterBox h4{margin:15px}.pvtFilterBox p{margin:10px auto}.pvtFilterBox label{font-weight:400}.pvtFilterBox input[type=checkbox]{margin-right:10px;margin-left:10px}.pvtFilterBox input[type=text]{width:230px}.pvtFilterBox .count{color:gray;font-weight:400;margin-left:3px}.pvtCheckContainer{text-align:left;font-size:14px;white-space:nowrap;overflow-y:scroll;width:100%;max-height:250px;border-top:1px solid #d3d3d3;border-bottom:1px solid #d3d3d3}.pvtCheckContainer p{margin:5px}.pvtRendererArea{padding:5px}'+
		           '</style>' +
				   '</head>'+
				   '<body link="blue" vlink="purple">{table}</body></html>';
	var base64 = function(s){
		return window.btoa(unescape(encodeURIComponent(s)));
	}
	var format = function(s,c){
		return s.replace(/{(\w+)}/g, function(m, p) {return c[p]; });
	}
	return function(selector, name) {
        var $table = $(selector);
        var ctx = {worksheet: name , table: $table.html()}
        window.location.href = uri + base64(format(template, ctx))
    }
})();