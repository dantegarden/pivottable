$(function(){
	var pivotTable = initPivot();

	var colgroup = "<colgroup>";
	$(pivotTable).find("tbody tr:first th, tbody tr:first td").each(function(){
		colgroup += "<col style='width:"+ $(this).width() +"px'>";
	});
	colgroup += "</colgroup>";
	console.log(colgroup);
});

function initPivot(){
	var sumNumAndPrintString = $.pivotUtilities.aggregatorTemplates.sumNumAndPrintString;
    var numberFormat = $.pivotUtilities.numberFormat;
    var intFormat = numberFormat({digitsAfterDecimal: 1}); //数据显示的格式化 可选项：suffix:"元" thousandsSep:" ", decimalSep:","
    
    var rawData = [
		            {year:"2014",month: "1月", art: "摘要",  value: 10},
					{year:"2014",month: "1月", art: "贷方金额",  value: 10},
					{year:"2014",month: "1月", art: "借方金额",  value: 10},
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
	                {year:"2014",month: "2月", art: "费用明细", type:1, mixtype:"外聘研发人员的劳务费", value: 10},

					{year:"2015", month:"1月", art: "余额",  value: 11},
					{year:"2015", month:"2月", art: "借或贷",  value: "借"},
					{year:"2016", month:"1月", art: "余额",  value: 12},
					{year:"2016", month:"2月", art: "借或贷",  value: "借"},
					{year:"2017", month:"1月", art: "余额",  value: 12},
					{year:"2017", month:"2月", art: "余额",  value: 12},
					{year:"2017", month:"3月", art: "余额",  value: 12},
					{year:"2017", month:"4月", art: "余额",  value: 12},
					{year:"2017", month:"5月", art: "余额",  value: 12},
					{year:"2017", month:"6月", art: "借或贷",  value: "借"},
					{year:"2017", month:"7月", art: "借或贷",  value: "借"},
					{year:"2017", month:"8月", art: "借或贷",  value: "借"},
					{year:"2017", month:"9月", art: "借或贷",  value: "借"},
					{year:"2018", month:"1月", art: "余额",  value: 12},
					{year:"2018", month:"2月", art: "借或贷",  value: "借"},

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
    

	return $("#output").pivot(
				rawData,
	            {
	                rows: ["年份","月份"],
	                cols: ["2014年度","大类","小类","细项"],
	                aggregator: sumNumAndPrintString(intFormat)(["value"]),//sum(intFormat)(["value"])
	                rendererName: "Table",
					//showColTotal: false,
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
	                },
					fixedRowHeader: true,
					fixedColHeader: true
	            },"zh"
	        );
};

function downloadExcel(){
	$("#output").pivotTable2Excel("交叉表","mySheet");
}