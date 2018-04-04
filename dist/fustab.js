$(function(){
	init();
	
	var json = {"nodename":"费用明细","code":"0","subnodes":[{"nodename":"一、人员人工费用","code":"01","subnodes":[{"nodename":"直接从事研发","code":"011","subnodes":[{"nodename":"工资薪金","code":"0111"},{"nodename":"五险一金","code":"0112"}]},{"nodename":"外聘研发人员的劳务费用","code":"012"}]},{"nodename":"二、直接投入费用","code":"02","subnodes":[{"nodename":"研发活动直接消耗","code":"021","subnodes":[{"nodename":"材料","code":"0211"},{"nodename":"燃料","code":"0212"},{"nodename":"动力费用","code":"0213"}]},{"nodename":"用于中间试验和产品试制的模具、工艺装备开发及制造","code":"022"},{"nodename":"用于不构成固定资产的样品、样机及一般测试手段购置费","code":"023"},{"nodename":"用于试制产品的检验费","code":"024"},{"nodename":"用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用","code":"025"},{"nodename":"通过经营租赁方式租入的用于研发活动的仪器、设备租赁费","code":"026"}]},{"nodename":"三、折旧费用","code":"03","subnodes":[{"nodename":"用于研发活动的仪器的折旧费","code":"031"},{"nodename":"用于研发活动的设备的折旧费","code":"032"}]},{"nodename":"四、无形资产摊销费用","code":"04","subnodes":[{"nodename":"用于研发活动的软件的摊销费用","code":"041"},{"nodename":"用于研发活动的专利权的摊销费用","code":"042"},{"nodename":"用于研发活动的非专利技术的摊销费用","code":"043"}]},{"nodename":"五、新产品设计费用","code":"05","subnodes":[{"nodename":"新产品设计费","code":"051"},{"nodename":"新工艺规程制定费","code":"052"},{"nodename":"新药研制的临床试验费","code":"053"},{"nodename":"勘探开发技术的现场试验费","code":"054"}]},{"nodename":"六、其他相关费用","code":"06"}]};
	$("#myTab").html($.dvt.fustab(json));
	
	var datajson = [{"month":"05","day":"10","type":"A","num":"1","code":"042","value":"120.1"},{"month":"05","day":"10","type":"A","num":"1","code":"043","value":"110.1"},{"month":"05","day":"10","type":"A","num":"1","code":"0111","value":"5000.1"},{"month":"05","day":"10","type":"A","num":"1","code":"0112","value":"750.1"},{"month":"05","day":"10","type":"A","num":"1","code":"0211","value":"510.1"},{"month":"05","day":"10","type":"A","num":"1","code":"032","value":"2180.1"},{"month":"05","day":"10","type":"A","num":"1","code":"041","value":"430.1"},{"month":"05","day":"10","type":"A","num":"1","code":"0212","value":"710.1"},{"month":"05","day":"10","type":"A","num":"1","code":"0213","value":"810.1"},{"month":"05","day":"10","type":"A","num":"1","code":"053","value":"910.1"},{"month":"05","day":"10","type":"A","num":"1","code":"054","value":"400.1"},{"month":"05","day":"10","type":"A","num":"1","code":"022","value":"510.1"},{"month":"05","day":"10","type":"A","num":"1","code":"023","value":"880.1"},{"month":"05","day":"10","type":"A","num":"1","code":"024","value":"210.1"},{"month":"05","day":"10","type":"A","num":"1","code":"025","value":"1110.1"},{"month":"05","day":"10","type":"A","num":"1","code":"026","value":"130.1"},{"month":"05","day":"10","type":"A","num":"1","code":"031","value":"15.1"},{"month":"05","day":"10","type":"A","num":"1","code":"051","value":"110.5"},{"month":"05","day":"10","type":"A","num":"1","code":"052","value":"890.1"},{"month":"05","day":"10","type":"A","num":"1","code":"06","value":"110.5"}];
	datajson = $.dvt.fustabData(0, datajson, ['month','day','type','num']);
	$("#myTab").append(datajson);
	
	var datajson = [{"month":"05","day":"10","type":"A","num":"1","code":"042","value":"120.1"},{"month":"05","day":"10","type":"A","num":"1","code":"043","value":"110.1"},{"month":"05","day":"10","type":"A","num":"1","code":"0111","value":"5000.1"},{"month":"05","day":"10","type":"A","num":"1","code":"0112","value":"750.1"},{"month":"05","day":"10","type":"A","num":"1","code":"0211","value":"510.1"},,{"month":"05","day":"10","type":"A","num":"1","code":"0212","value":"710.1"},{"month":"05","day":"10","type":"A","num":"1","code":"0213","value":"810.1"},{"month":"05","day":"10","type":"A","num":"1","code":"053","value":"910.1"},{"month":"05","day":"10","type":"A","num":"1","code":"054","value":"400.1"},{"month":"05","day":"10","type":"A","num":"1","code":"022","value":"510.1"},{"month":"05","day":"10","type":"A","num":"1","code":"023","value":"880.1"},{"month":"05","day":"10","type":"A","num":"1","code":"024","value":"210.1"},{"month":"05","day":"10","type":"A","num":"1","code":"025","value":"1110.1"},{"month":"05","day":"10","type":"A","num":"1","code":"026","value":"130.1"},{"month":"05","day":"10","type":"A","num":"1","code":"031","value":"15.1"},{"month":"05","day":"10","type":"A","num":"1","code":"051","value":"110.5"},{"month":"05","day":"10","type":"A","num":"1","code":"052","value":"890.1"},{"month":"05","day":"10","type":"A","num":"1","code":"06","value":"110.5"}];
	datajson = $.dvt.fustabData(0, datajson, ['month','day','type','num']);
	$("#myTab").append(datajson);
});

function init(){
	
	
	$.extend({
		dvt : { 
				fustabRows : (function FustabRows(arr){
					var o = new Object();
					o.getRows = function(index) {  
				        return arr[index];  
				    };
				    o.getLength = function(){
				    	return arr.length;
				    }
				    o.setRows = function(index,value) {  
				        arr[index] = value;  
				    };
				    return o;
				})([]),
				fustabData : function(tablenum,arr,keys){
					var html = '<tr role="fustab_data">';
					var rows = $.dvt.fustabRows.getRows(tablenum);
					var arr = $.dvt.sortObjArr(arr,keys);
					
					if(arr){
						var ef = function(code, index ,array){
							var flag = false;
							for(var i =0;i<arr.length;i++){
								if(arr[i] && arr[i].code == code){
									html+= "<td role='"+code+"'>" + arr[i].value +"</td>";
									flag = true;
									break;
								}
							}
							if(!flag){
								html+= "<td role='"+code+"'></td>";
							}
						};
						rows.forEach(ef)
					}
					return html + "</tr>";
				},
				sortObjArr : function(arr,keys,asc){
					if($.isArray(arr) && keys){//首先得是个数组
						var compare = function (keys) {
						    return function (obj1, obj2) {
						    	var val1,val2
								for(var i=0;i<keys.length;i++){
									val1 += obj1[keys[i]]+"_";
									val2 += obj2[keys[i]]+"_";
								}
						    	if (val1 < val2) {
						            return -1;
						        } else if (val1 > val2) {
						            return 1;
						        } else {
						            return 0;
						        }            
						    }
						}
						return arr.sort(compare(keys));
						
					}else{
						return arr;
					}
			    },
				checkLeafNum : function(obj){
					var leaf = 0;
					
					if($.isArray(obj)){//数组
						var ef = function(node, index ,array){
							if(node.subnodes){
								leaf+= $.dvt.checkLeafNum(node)
							}else{
								leaf++;
							}
						};
						obj.forEach(ef)
					}else{//只有一个父节点的对象
						if(obj.subnodes){
							var ef = function(node, index ,array){
								if(node.subnodes){
									leaf+= $.dvt.checkLeafNum(node)
								}else{
									leaf++;
								}
							};
							obj.subnodes.forEach(ef)
						}else{
							leaf++;
						}
					}
					return leaf;
					
				},
				checkLayerNum : function(obj){
					if($.isArray(obj)){//数组
						var layer = 0;
						max = layer;
						var ef = function(node, index ,array){
							if(node.subnodes){
								var tmp = $.dvt.checkLayerNum(node);
								if(tmp>max){
									max = tmp;
								}
							}
						};
						obj.forEach(ef)
						layer += max;	
					}else{
						var layer = 1;
						if(obj.subnodes){
							var max = layer;
							var ef = function(node, index ,array){
								if(node.subnodes){
									var tmp = $.dvt.checkLayerNum(node);
									if(tmp>max){
										max = tmp;
									}
								}
							};
							obj.subnodes.forEach(ef)
							layer += max;
						}
					}
					return layer;
				},
				fustab : function(headers){
				    var html = '';
					if(headers){
						var colnum = $.dvt.checkLeafNum(headers);
						var rownum = $.dvt.checkLayerNum(headers);
						if($.isArray(headers)){//数组
							html += $.dvt.fustabHtml(headers);
						}else{
							html += "<tr role='fustab_header'>"+"<td role='"+headers.code+"' colspan='"+colnum+"'>"+headers.nodename+"</td>"+"</tr>";
							if(headers.subnodes)
								html += $.dvt.fustabHtml(headers.subnodes);
						}
					}
					return html+"";
			    },
			    fustabHtml : function(obj){
			    	var html = '';
			    	if(obj){
			    		var colnum = $.dvt.checkLayerNum(obj);//有几行
			    		
			    		var tr_arr = [];
			    		for(var i=0;i<colnum;i++){//按行遍历
			    			var tr = document.createElement("tr");
			    			tr.setAttribute("role", "fustab_header");
			    			tr_arr.push(tr);
			    		}
			    		var leaves = [];//记下叶子节点
			    		var func = function(_nodes,row){
			    			//拿到本层节点的所拥有的最大深度
			    			var maxLayer = 1;
			    			for(var i=0;i<_nodes.length;i++){
			    				var tmp = $.dvt.checkLayerNum(_nodes[i]);
			    				if(tmp>maxLayer){
			    					maxLayer = tmp;
			    				}
			    			}
			    			
			    			for(var i=0;i<_nodes.length;i++){
				    			var td = document.createElement("td")
				    			td.setAttribute('role',_nodes[i].code);
				    			td.innerHTML = _nodes[i].nodename;
				    			var _colnum = $.dvt.checkLeafNum(_nodes[i]);
				    			if(_colnum>1){
				    				td.setAttribute('colspan', _colnum);//这个node下面有多少列
				    			}
				    			
				    			if(_nodes[i].subnodes){//有下一层需要递归
				    				func(_nodes[i].subnodes, row+1);//递归，下一行
				    			}else{//叶子节点
				    				leaves.push(_nodes[i].code);//记下code
				    				if(colnum-row>1)
				    					td.setAttribute('rowspan', colnum-row);//跨行
				    			}
				    			tr_arr[row].appendChild(td);
				    		}
			    		}
			    		
			    		var nodes = obj
			    		func(nodes,0);
			    		
			    		leaves = leaves.sort();//小到大排序 记录到fustabRows内置对象里
			    		var tablen = $.dvt.fustabRows.getLength()
			    		if(tablen ==0){
			    			$.dvt.fustabRows.setRows(0,leaves);
			    		}else{
			    			$.dvt.fustabRows.setRows(tablen,leaves);
			    		}
			    		
			    		for(var i=0;i<tr_arr.length;i++){//按行遍历
			    			html += tr_arr[i].outerHTML;
			    		}
			    		
					}
			    	return html;
			    }
	    }
		
	});
	
}