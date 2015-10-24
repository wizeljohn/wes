/*==========================================================
			S C R I P T   F U N C T I O N   FOR PAGE SPLASH
		==========================================================*/
		$(document).on('pageinit','#pgSplash',function(){     
            setTimeout(function(){
            $.mobile.changePage("#pageLogin", "flow");
        }, 3000);
        });

        /*==========================================================
			END  S C R I P T   F U N C T I O N   FOR PAGE SPLASH
		==========================================================*/


		$(document).ready(function(){

			var username;

			/* ===================================================== 
					START OF FUNCTION FOR BUTTON LOGOUT
			====================================================== */
			
			/* ===================================================== 
					START OF FUNCTION FOR BUTTON LOGOUT
			====================================================== */

			/* ===================================================== 
					START OF FUNCTION FOR PICTURE PREVIEW
			====================================================== */
			$(function(){
				$('#file').change(function(){
					var reader = new FileReader();
					reader.onload = function(e){
						$('#preview').attr("style", "height:100px; width:100px");
						$('#preview').attr('src', e.target.result);

					}
					reader.readAsDataURL(this.files[0]);

				});
			});
			/* ===================================================== 
					END OF FUNCTION FOR PICTURE PREVIEW
			====================================================== */



			/* ===================================================== 
					START OF FUNCTION FOR FORM SIGN UP
			====================================================== */
			$("#frmSignUp").on('submit',(function(e) {
	            e.preventDefault();
	            $.ajax({
	                url: "signup.php",
	                type: "POST",
	                data:  new FormData(this),
	                contentType: false,
	                cache: false,
	                processData:false,
	                success: function(data){
	                	if(data){
								alert("You have succesfully registered.");
								location.href = 'index.html#pageIndex';
							}
									
						}           
	           });
	            	username = $('#txtSignUser').val();
					localStorage.setItem('localUser',username );
	        }));

			/* ===================================================== 
					END OF FUNCTION FOR FORM SIGN UP
			====================================================== */


			/* ===================================================== 
					START OF FUNCTION FOR FORM LOGIN
			====================================================== */
			$('#btnLogin').click(function(){
				$.ajax({
					type:'GET',
					url:'login.php',
					dataType:'html',
					data:$('#frmLogin').serialize(),
					success:function(data){
						if(data == 'yes'){
							location.href = 'index.html#pageIndex';
						}
					}
					});

					var user = localStorage.getItem('localUser');
					/*=================================
						FUNCTION FOR BUYITEM VIEW
					==================================*/
					$.ajax({
						type: 'GET',
						url:'BuyItem.php',
						dataType:'html',
						data:"user="+user,
						success: function(data){
							if(data){
								$('#divBuyItem').html(data);
							}
						}
					});
					/*=================================
						FUNCTION FOR BUYITEM VIEW
					==================================*/

					$.ajax({
						type: 'GET',
						url:'profile.php',
						dataType: 'html',
						data: {store:localStorage.getItem('localUser')},
						success: function(data){
							if(data){
								$('#myProfile').html(data);
							}
						}
					});


					/*=================================
						FUNCTION FOR BUYITEM VIEW
					==================================*/
					$.ajax({
						type: 'GET',
						url:'SellItem.php',
						dataType:'html',
						data:"user="+user,
						success: function(data){
							if(data){
								$('#divSellItem').html(data);
							}
						}
					});
					/*=================================
						FUNCTION FOR BUYITEM VIEW
					==================================*/

				username = $('#txtUsername').val();
				localStorage.setItem('localUser',username);

				$.ajax({
					type : 'POST',
					url : 'checkuser.php',
							data : {
						sql : "SELECT * FROM tbl_user WHERE fld_username = '" + localStorage.getItem('bas_user') + "'"
					},
					dataType : 'html',
					success : function(eliza){
						if(eliza){
							$("#divRateButtonHolder").html(eliza);
						}
					}
				});
			});
			/* ===================================================== 
					START OF FUNCTION FOR FORM LOGIN
			====================================================== */


			/* ===================================================== 
					START OF FUNCTION FOR VIEWING USER PROFILE 
			====================================================== */
			$.ajax({
				type: 'GET',
				url:'profile.php',
				dataType: 'html',
				data: {store:localStorage.getItem('localUser')},
				success: function(data){
					if(data){
						$('#myProfile').html(data);
					}
				}
			});
			/* ===================================================== 
					START OF FUNCTION FOR VIEWING USER PROFILE 
			====================================================== */
			

			/*===================================================================================
					S T A R T   O F   F U N C T I O N   V I E W I N G   P E R   C A T E G O R Y
			====================================================================================*/


			/* ===================================================== 
					START OF FUNCTION FOR VIEWING MOBILE PHONE  
			====================================================== */
			$.ajax({
				type: 'GET',
				url:'mobile&tablet.php',
				dataType:'html',
				data: {},
				success: function(data){
					if(data){
						$('#divItem').html(data);
					}
				}
			});
			/* ===================================================== 
					START OF FUNCTION FOR VIEWING MOBILE PHONE  
			====================================================== */



			/* ===================================================== 
					START OF FUNCTION FOR VIEWING COMPUTER AND LAPTOP  
			====================================================== */
			$.ajax({
				type: 'GET',
				url:'computer&laptop.php',
				dataType:'html',
				data: {},
				success: function(data){
					if(data){
						$('#divComLap').html(data);
					}
				}
			});
			/* ===================================================== 
					START OF FUNCTION FOR VIEWING COMPUTER AND LAPTOP   
			====================================================== */



			/* ===================================================== 
					START OF FUNCTION FOR VIEWING SHOES AND BAGS 
			====================================================== */
			$.ajax({
				type: 'GET',
				url:'shoes&bags.php',
				dataType:'html',
				data: {},
				success: function(data){
					if(data){
						$('#divShoes').html(data);
					}
				}
			});
			/* ===================================================== 
					START OF FUNCTION FOR VIEWING SHOES AND BAGS    
			====================================================== */


			/* ===================================================== 
					START OF FUNCTION FOR VIEWING APPLIANCES
			====================================================== */
			$.ajax({
				type: 'GET',
				url:'appliances.php',
				dataType:'html',
				data: {},
				success: function(data){
					if(data){
						$('#divAppliances').html(data);
					}
				}
			});
			/* ===================================================== 
					START OF FUNCTION FOR VIEWING APPLIANCES   
			====================================================== */


			/* ===================================================== 
					START OF FUNCTION FOR WATCHES AND JEWERLY
			====================================================== */
			$.ajax({
				type: 'GET',
				url:'watches.php',
				dataType:'html',
				data: {},
				success: function(data){
					if(data){
						$('#divwatches').html(data);
					}
				}
			});
			/* ===================================================== 
					START OF FUNCTION FOR WATCHES AND JEWERLY  
			====================================================== */


			/* ===================================================== 
					START OF FUNCTION FOR CAMERAS
			====================================================== */
			$.ajax({
				type: 'GET',
				url:'cameras.php',
				dataType:'html',
				data: {},
				success: function(data){
					if(data){
						$('#divcameras').html(data);
					}
				}
			});
			/* ===================================================== 
					START OF FUNCTION FOR CAMERAS  
			====================================================== */


			/* ===================================================== 
					START OF FUNCTION FOR CLOTHING
			====================================================== */
			$.ajax({
				type: 'GET',
				url:'clothing.php',
				dataType:'html',
				data: {},
				success: function(data){
					if(data){
						$('#divclothing').html(data);
					}
				}
			});
			/* ===================================================== 
					START OF FUNCTION FOR CLOTHING 
			====================================================== */


			/* ===================================================== 
					START OF FUNCTION FOR BOOKS
			====================================================== */
			$.ajax({
				type: 'GET',
				url:'books.php',
				dataType:'html',
				data: {},
				success: function(data){
					if(data){
						$('#divbooks').html(data);
					}
				}
			});
			/* ===================================================== 
					START OF FUNCTION FOR BOOKS
			====================================================== */


			/* ===================================================== 
					START OF FUNCTION FOR FOODS
			====================================================== */
			$.ajax({
				type: 'GET',
				url:'foods.php',
				dataType:'html',
				data: {},
				success: function(data){
					if(data){
						$('#divfoods').html(data);
					}
				}
			});
			/* ===================================================== 
					START OF FUNCTION FOR FOODS
			====================================================== */


			/* ===================================================== 
					START OF FUNCTION FOR FOODS
			====================================================== */
			$.ajax({
				type: 'GET',
				url:'others.php',
				dataType:'html',
				data: {},
				success: function(data){
					if(data){
						$('#divothers').html(data);
					}
				}
			});
			/* ===================================================== 
					START OF FUNCTION FOR FOODS
			====================================================== */




			/*===================================================================================
					E N D   O F   F U N C T I O N   V I E W I N G   P E R   C A T E G O R Y
			====================================================================================*/




			/* ===================================================== 
					START OF FUNCTION FOR IMAGE SIGN UP 
			====================================================== */
			$(function(){
				$('#image').change(function(){
					var read = new FileReader();
					read.onload = function(i){
						$('#itempreview').attr("style", "height:100px; width:100px");
						$('#itempreview').attr('src', i.target.result);

					}
					read.readAsDataURL(this.files[0]);

				});
			});

			/* ===================================================== 
					END OF FUNCTION FOR IMAGE SIGN UP 
			====================================================== */


			/* ===================================================== 
					START OF FUNCTION FOR FORM SIGN UP  
			====================================================== */
			$("#frmMobile").on('submit',(function(i) {	
				var name = localStorage.getItem('localUser');
				$('#para').val(name);	

	            i.preventDefault();
	            $.ajax({
	                url: "additem.php",
	                type: "POST",
	                data:  new FormData(this),
	                contentType: false,
	                cache: false,
	                processData:false,
	                success: function(data){
	                	if(data){
								alert("You have successfully add your item.");
								location.href = 'index.html#pageIndex';
								var category = $('#optCategory').val();

								if(category == 'Mobile Phone & Tablets')
								{
									$.ajax({
									type: 'GET',
									url:'mobile&tablet.php',
									dataType:'html',
									data: {},
									success: function(data){
										if(data){
											$('#divItem').html(data);
										}
									}
								});
								}

								else if(category == 'Computers & Laptops'){
									$.ajax({
										type: 'GET',
										url:'computer&laptop.php',
										dataType:'html',
										data: {},
										success: function(data){
											if(data){
												$('#divComLap').html(data);
											}
										}
									});

								}

								else if(category == 'Shoes & Bags'){
									$.ajax({
										type: 'GET',
										url:'shoes&bags.php',
										dataType:'html',
										data: {},
										success: function(data){
											if(data){
												$('#divShoes').html(data);
											}
										}
									});

								}

								else if(category == 'Appliances'){
									$.ajax({
										type: 'GET',
										url:'appliances.php',
										dataType:'html',
										data: {},
										success: function(data){
											if(data){
												$('#divAppliances').html(data);
											}
										}
									});

								}

								else if(category == 'Watches & Jewerly'){
									$.ajax({
										type: 'GET',
										url:'watches.php',
										dataType:'html',
										data: {},
										success: function(data){
											if(data){
												$('#divwatches').html(data);
											}
										}
									});

								}

								else if(category == 'Cameras'){
									$.ajax({
										type: 'GET',
										url:'cameras.php',
										dataType:'html',
										data: {},
										success: function(data){
											if(data){
												$('#divcameras').html(data);
											}
										}
									});

								}

								else if(category == 'Clothing'){
									$.ajax({
										type: 'GET',
										url:'clothing.php',
										dataType:'html',
										data: {},
										success: function(data){
											if(data){
												$('#divclothing').html(data);
											}
										}
									});

								}

								else if(category == 'Books'){
									$.ajax({
										type: 'GET',
										url:'books.php',
										dataType:'html',
										data: {},
										success: function(data){
											if(data){
												$('#divbooks').html(data);
											}
										}
									});

								}

								else if(category == 'Foods'){
									$.ajax({
										type: 'GET',
										url:'foods.php',
										dataType:'html',
										data: {},
										success: function(data){
											if(data){
												$('#divfoods').html(data);
											}
										}
									});

								}

								else if(category == 'Others'){
									$.ajax({
										type: 'GET',
										url:'others.php',
										dataType:'html',
										data: {},
										success: function(data){
											if(data){
												$('#divothers').html(data);
											}
										}
									});

								}

								
							}
									
						}           
	           });
	            
				
	        }));


		$('#btnLogout').click(function(){
                 window.localStorage.clear();
                 location.reload();
                 location.href = "index.html#pageLogin";
                 
            });

});

	        


	        /* ===================================================== 
					END OF FUNCTION FOR FORM SIGN UP  
			====================================================== */
							

