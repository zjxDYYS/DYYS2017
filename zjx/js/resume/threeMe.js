$(document).ready(function(){
	$("#threeDLi").click(function(){
		clear();
		init();
	});
	$("#navXM").click(function(){
		clear();
		init();
	});
	function init() {
		$("#TLDiv").remove();
		var titleDiv = $('<div></div>'); 
		titleDiv.attr('id','TLDiv');
		titleDiv.appendTo('#container'); 
		initCircleDiv(titleDiv);
		initPromptDiv(titleDiv);
		initThree();
		animate();
	}
	function clear() {
		$(".menuHolder").remove();
		$("#RSDiv").remove();
		$("#RSTab").remove();
		$("#RSProject").remove();
		$("#RSCampus").remove();
		$("#RSPractice").remove();
	}
	function initThree() {
		var container = $("#TLDiv");
		cameraWidth = container.width();
		cameraheight = container.height();
		scene = new THREE.Scene();
		scene.background = new THREE.Color( 0xb0c5d9 );
		initgrid();
		initLight();
		initCamera(cameraWidth,cameraheight);
		
		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setClearColor( 0xb0c5d9, 1 );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( cameraWidth, cameraheight );
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFShadowMap;

		document.getElementById('TLDiv').onmousedown = function(ev){
			onDocumentMouseDown( ev )
		}
		
		container.append( renderer.domElement );
		Csctl();
		trcol();
		//addObj();
		word();
	}
	function onDocumentMouseDown( ev ) {
		var oEvent = ev || event;
		if (oEvent.button == 0) {
			oEvent.preventDefault();
			var mouse = new THREE.Vector2();
			mouse.x = ( (oEvent.clientX-210)/ renderer.domElement.clientWidth ) * 2 - 1;
			mouse.y = - ( oEvent.clientY / renderer.domElement.clientHeight ) * 2 + 1;
			var raycaster = new THREE.Raycaster();	
			raycaster.setFromCamera( mouse, activeCamera );
			var intersects = raycaster.intersectObjects([ scene.children[3]], true );
			if ( intersects.length > 0 ) {
				var intersect = intersects[ 0 ];					
				control.attach( intersect.object.parent );
			}
		}
	};
	function animate() {
		requestAnimationFrame( animate );
		render();
	}
	function render() {
		renderer.render( scene, activeCamera );
	}
	function initLight() {
		dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
		dirLight.position.set( 0, 0, 1 ).normalize();
		scene.add( dirLight );
	}
	function initCamera() {
		activeCamera = new THREE.PerspectiveCamera( 60,cameraWidth / cameraheight, 1, 1000 );
		activeCamera.position.set(0,100,500);
	}
	function set3DCamera() {
		activeCamera = new THREE.PerspectiveCamera( 60,cameraWidth / cameraheight, 1, 1000 );
		activeCamera.position.set(0,100,500);
		Csctl();
	}
	function setTopCamera() {
		activeCamera = new THREE.OrthographicCamera(cameraWidth/  - 2,cameraWidth/ 2,cameraheight/ 2,cameraheight /  - 2,1,100000);
		activeCamera.position.set(0,1000,0);
		activeCamera.lookAt(new THREE.Vector3(0,0,0));
	}
	function setLeftCamera() {
		activeCamera = new THREE.OrthographicCamera(cameraWidth/  - 2,cameraWidth/ 2,cameraheight/ 2,cameraheight /  - 2,1,100000);
		activeCamera.position.set(-cameraWidth/2,0,0);
		activeCamera.lookAt(new THREE.Vector3(0,0,0));
	}
	function setMainCamera() {
		activeCamera = new THREE.OrthographicCamera(cameraWidth/  - 2,cameraWidth/ 2,cameraheight/ 2,cameraheight /  - 2,1,100000);
		activeCamera.position.set(0,0,1000);
		activeCamera.lookAt(new THREE.Vector3(0,0,0));
	}
	function initPlane() {
		var geometry = new THREE.PlaneBufferGeometry( 600, 600 );
		geometry.rotateX( - Math.PI / 2 );
		var material = new THREE.MeshBasicMaterial( { color: 0x333333, overdraw: 0.5 } );
		plane = new THREE.Mesh( geometry, material );
		scene.add( plane );
	}
	function initgrid() {
		var gridHelper = new THREE.GridHelper( 800, 30, 0x3f464d, 0x7e7f80);
		scene.add( gridHelper );
	}
	function addObj() {
/* 		var texture = new THREE.TextureLoader().load( '../img/bg.png', render );
		texture.mapping = THREE.UVMapping;
		texture.anisotropy = renderer.getMaxAnisotropy(); */
		var geometry = new THREE.BoxGeometry( 200, 200, 200 );
		//var material = new THREE.MeshLambertMaterial( { map: texture } );
		var material = new THREE.MeshBasicMaterial( { color: 0xacadae, overdraw: 0.5 } );
		var mesh = new THREE.Mesh( geometry, material );
		control.attach( mesh );
		scene.add( mesh );
	}
	function Csctl() {
		controls = new THREE.OrbitControls( activeCamera, renderer.domElement );
		controls.addEventListener( 'change', render );
		controls.enableDamping = true;
		controls.dampingFactor = 0.25;
		controls.enableZoom = true;
	}
	function trcol() {
		control = new THREE.TransformControls( activeCamera, renderer.domElement );
		control.addEventListener( 'change', render );
		scene.add( control );
		window.addEventListener( 'keydown', function ( event ) {
			switch ( event.keyCode ) {
				case 81: // Q
					control.setSpace( control.space === "local" ? "world" : "local" );
					break;
				case 17: // Ctrl
					control.setTranslationSnap( 100 );
					control.setRotationSnap( THREE.Math.degToRad( 15 ) );
					break;
				case 87: // W
					control.setMode( "translate" );
					break;
				case 69: // E
					control.setMode( "rotate" );
					break;
				case 82: // R
					control.setMode( "scale" );
					break;
				case 68: // D
					control.detach();
					break;
				case 187:
				case 107: // +, =, num+
					control.setSize( control.size + 0.1 );
					break;
				case 189:
				case 109: // -, _, num-
					control.setSize( Math.max( control.size - 0.1, 0.1 ) );
					break;
			}
		});
		window.addEventListener( 'keyup', function ( event ) {
			switch ( event.keyCode ) {
				case 17: // Ctrl
					control.setTranslationSnap( null );
					control.setRotationSnap( null );
					break;
			}
		});
	}
	function initPromptDiv(titleDiv){
		var cirleDiv = $('<div id="PromptDiv"><p>1.考虑到浏览器加载本地文件操作繁琐，此案例直接利用three.js模型简单做了一个场景，没有加载贴图、纹理、模型<a href="http://dev.ddroom.cn/">如果观看效果请点击项目链接</a></p><p>2.鼠标点击字体可控制模型，"W"键移动，"E"键旋转，"R"键缩放，"D"键取消控制,鼠标右键平移场景，中键缩放场景，左键旋转场景</p><p>3.如果没有显示三维场景，请用支持WebGl的浏览器打开，推荐谷歌浏览器</p></div><div class = "tip1" id ="tipBtn"><div>');
		cirleDiv.appendTo(titleDiv);
		$('#tipBtn').click(function(){//3D视图
			if ( $('#PromptDiv').is(":hidden") ) {
				$('#PromptDiv').show(200);
				$('#tipBtn').attr("class", "tip1");
			}else{
				$('#PromptDiv').hide(200);
				$('#tipBtn').attr("class", "tip2");
			}
		});
	}
	function initCircleDiv(titleDiv) {
		var cirleDiv = $('<div id="viewModalDiv"><input class="btn3DView1"type="button"id="btn3DView"title="3D视图"><input class="btnLeftView1"type="button"id="btnLeftView"title="左视图"><input class="btnWireframeView1"type="button"id="btnWireframeView"title="线框图"><input class="btnMainView1"type="button"id="btnMainView"title="主视图"><input class="btnLookDownView1"type="button"id="btnLookDownView"title="俯视图"></div>');
		cirleDiv.appendTo(titleDiv);
		//圆形可拖拽菜单点击响应事件
		$('#btn3DView').click(function(){//3D视图
			set3DCamera();
		});
		$("#btn3DView").hover(
			function(){
				$("#btn3DView").attr("class", "btn3DView2");
			},
			function(){
				$("#btn3DView").attr("class", "btn3DView1");
			}
		);
		$('#btnLeftView').click(function(){//左视图
			setLeftCamera();
		});
		$('#btnLeftView').hover(
			function(){
				$("#btnLeftView").attr("class", "btnLeftView2");
			},
			function(){
				$("#btnLeftView").attr("class", "btnLeftView1");
			}
		);
		$('#btnWireframeView').click(function(){//线框图
			//set3D();
		});
		$('#btnWireframeView').hover(
			function(){
				$("#btnWireframeView").attr("class", "btnWireframeView2");
			},
			function(){
				$("#btnWireframeView").attr("class", "btnWireframeView1");
			}
		);
		$('#btnMainView').click(function(){//主视图
			setMainCamera();
		});
		$('#btnMainView').hover(
			function(){
				$("#btnMainView").attr("class", "btnMainView2");
			},
			function(){
				$("#btnMainView").attr("class", "btnMainView1");
			}
		);
		$('#btnLookDownView').click(function(){//俯视图
			setTopCamera();
		});
		$('#btnLookDownView').hover(
			function(){
				$("#btnLookDownView").attr("class", "btnLookDownView2");
			},
			function(){
				$("#btnLookDownView").attr("class", "btnLookDownView1");
			}
		);
		dragView();		
	}
	//球形视图按钮拖拽的DIVjs
	function dragView(){
		var container = $("#TLDiv");
		var width = container.width();
		var height = container.height();
		var oDiv=document.getElementById('viewModalDiv');
		var disX=0;
		var disY=0;
		
		oDiv.onmousedown=function (ev)
		{
			var oEvent=ev||event;
			
			disX=oEvent.clientX-oDiv.offsetLeft;
			disY=oEvent.clientY-oDiv.offsetTop;
			
			document.onmousemove=function (ev)
			{
				var oEvent=ev||event;
				var l=oEvent.clientX-disX;
				var t=oEvent.clientY-disY;
				
				if(l<0)
				{
					l=0;
				}
				else if(l>width-oDiv.offsetWidth)
				{
					l=width-oDiv.offsetWidth;
				}
				
				if(t<0)
				{
					t=0;
				}
				else if(t>height-oDiv.offsetHeight)
				{
					t=height-oDiv.offsetHeight;
				}
				
				oDiv.style.left=l+'px';
				oDiv.style.top=t+'px';
			};
			
			document.onmouseup=function ()
			{
				document.onmousemove=null;
				document.onmouseup=null;
			};
			
			return false;
		}
	}
	function word() {
		wordSize = 20;
		wordGroup = new THREE.Group();
		var zhao = Zhao();
		var jia = Jia();
		var xuan = Xuan();
		var jian = Jian();
		var li = Li();
		wordGroup.add(zhao);
		wordGroup.add(jia);
		wordGroup.add(xuan);
		wordGroup.add(jian);
		wordGroup.add(li);
		scene.add( wordGroup );
	}
	function Zhao() {//第一笔中心算位置
		var group = new THREE.Group();
		var materail = new THREE.MeshBasicMaterial({ color:0x10405e});
		
		var mesh1 = new THREE.Mesh( new THREE.BoxGeometry( 3*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh1.position.set( 0*wordSize, -0.5*wordSize,0*wordSize);
		group.add(mesh1);
		
		var mesh2 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 8*wordSize,1*wordSize ), materail);
		mesh2.position.set( 0*wordSize, -2.5*wordSize,0*wordSize);
		group.add(mesh2);
		
		var mesh3 = new THREE.Mesh( new THREE.BoxGeometry( 4*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh3.position.set( 0*wordSize, -2.5*wordSize,0*wordSize);
		group.add(mesh3);
		
		var mesh4 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh4.position.set( 1*wordSize, -4.5*wordSize,0*wordSize);
		group.add(mesh4);
		
		var mesh5 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 3*wordSize,1*wordSize ), materail);
		mesh5.position.set( -2*wordSize, -6*wordSize,0*wordSize);
		mesh5.rotation.set( 0, 0, -0.1*Math.PI);
		group.add(mesh5);
		
		var mesh6 = new THREE.Mesh( new THREE.BoxGeometry( 8*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh6.position.set( 2*wordSize, -6.5*wordSize,0*wordSize);
		mesh6.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh6);
		
		var mesh7 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 6*wordSize,1*wordSize ), materail);
		mesh7.position.set( 3.5*wordSize, -2.5*wordSize,0*wordSize);
		mesh7.rotation.set( 0, 0, 0.1*Math.PI);
		group.add(mesh7);
		
		var mesh8 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 6*wordSize,1*wordSize ), materail);
		mesh8.position.set( 3.5*wordSize, -2.5*wordSize,0*wordSize);
		mesh8.rotation.set( 0, 0, -0.1*Math.PI);
		group.add(mesh8);
		
		group.position.set( -13*wordSize, 10*wordSize,0*wordSize);
		return group;
	}
	function Jia() {
		var group = new THREE.Group();
		var materail = new THREE.MeshBasicMaterial({ color:0x594931});
		
		var mesh1 = new THREE.Mesh( new THREE.BoxGeometry( 4*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh1.position.set( 0*wordSize, 0.5*wordSize,0*wordSize);
		group.add(mesh1);
		
		var mesh2 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 6*wordSize,1*wordSize ), materail);
		mesh2.position.set( 1.5*wordSize, -2*wordSize,0*wordSize);
		group.add(mesh2);
		
		var mesh3 = new THREE.Mesh( new THREE.BoxGeometry( 2*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh3.position.set( 1*wordSize, -5*wordSize,0*wordSize);
		mesh3.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh3);
		
		var mesh4 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 8*wordSize,1*wordSize ), materail);
		mesh4.position.set( -1*wordSize, -2*wordSize,0*wordSize);
		mesh4.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh4);
		
		var mesh5 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 5*wordSize,1*wordSize ), materail);
		mesh5.position.set( 3.5*wordSize, -1.5*wordSize,0*wordSize);
		group.add(mesh5);
		
		var mesh6 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 5*wordSize,1*wordSize ), materail);
		mesh6.position.set( 5.5*wordSize, -1.5*wordSize,0*wordSize);
		group.add(mesh6);
		
		var mesh7 = new THREE.Mesh( new THREE.BoxGeometry( 3*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh7.position.set( 4.5*wordSize, 0.5*wordSize,0*wordSize);
		group.add(mesh7);
		
		var mesh8 = new THREE.Mesh( new THREE.BoxGeometry( 3*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh8.position.set( 4.5*wordSize, -4.5*wordSize,0*wordSize);
		group.add(mesh8);
		
		group.position.set( -3*wordSize, 9*wordSize,0*wordSize);
		return group;
	}
	function Xuan() {
		var group = new THREE.Group();
		var materail = new THREE.MeshBasicMaterial({ color:0x302a55});
		
		var mesh1 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh1.position.set( 0*wordSize, 0.05*wordSize,0*wordSize);
		group.add(mesh1);
		
		var mesh2 = new THREE.Mesh( new THREE.BoxGeometry( 4*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh2.position.set( 0.5*wordSize, -1.5*wordSize,0*wordSize);
		group.add(mesh2);
		
		var mesh3 = new THREE.Mesh( new THREE.BoxGeometry( 4*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh3.position.set( 0.5*wordSize, -3.5*wordSize,0*wordSize);
		group.add(mesh3);
		
		var mesh4 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 5*wordSize,1*wordSize ), materail);
		mesh4.position.set( 2*wordSize, -5.5*wordSize,0*wordSize);
		group.add(mesh4);
		
		var mesh5 = new THREE.Mesh( new THREE.BoxGeometry( 2*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh5.position.set( 1.5*wordSize, -8*wordSize,0*wordSize);
		mesh5.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh5);
		
		var mesh6 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 7*wordSize,1*wordSize ), materail);
		mesh6.position.set( -0.25*wordSize, -5.5*wordSize,0*wordSize);
		mesh6.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh6);
		
		var mesh7 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 2.5*wordSize,1*wordSize ), materail);
		mesh7.position.set( 3.4*wordSize, -0.45*wordSize,0*wordSize);
		mesh7.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh7);
		
		var mesh8 = new THREE.Mesh( new THREE.BoxGeometry( 4*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh8.position.set( 5.5*wordSize, -0.45*wordSize,0*wordSize);
		group.add(mesh8);
		
		var mesh9 = new THREE.Mesh( new THREE.BoxGeometry( 3*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh9.position.set( 5.25*wordSize, -2.5*wordSize,0*wordSize);
		group.add(mesh9);
		
		var mesh10 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 2*wordSize,1*wordSize ), materail);
		mesh10.position.set( 7*wordSize, -3*wordSize,0*wordSize);
		mesh10.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh10);
		
		var mesh11 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 5*wordSize,1*wordSize ), materail);
		mesh11.position.set( 5.25*wordSize, -5.5*wordSize,0*wordSize);
		group.add(mesh11);
		
		var mesh12 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh12.position.set( 6*wordSize, -5.5*wordSize,0*wordSize);
		group.add(mesh12);
		
		var mesh13 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 3*wordSize,1*wordSize ), materail);
		mesh13.position.set( 3.5*wordSize, -7.5*wordSize,0*wordSize);
		mesh13.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh13);
		
		var mesh14 = new THREE.Mesh( new THREE.BoxGeometry( 5*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh14.position.set( 6*wordSize, -8*wordSize,0*wordSize);
		mesh14.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh14);
		
		group.position.set( 8*wordSize, 11.25*wordSize,0*wordSize);
		return group;
	}
	function Jian() {
		var group = new THREE.Group();
		var materail = new THREE.MeshBasicMaterial({ color:0x699b09});
		var mesh1 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 2*wordSize,1*wordSize ), materail);
		mesh1.position.set(0*wordSize, 0*wordSize,0*wordSize);
		mesh1.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh1);
		
		var mesh2 = new THREE.Mesh( new THREE.BoxGeometry( 2*wordSize, 0.9*wordSize,1*wordSize ), materail);
		mesh2.position.set(1.5*wordSize, 0*wordSize,0*wordSize);
		group.add(mesh2);
		
		var mesh3 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh3.position.set(1.05*wordSize, -1*wordSize,0*wordSize);
		mesh3.rotation.set( 0, 0, 0.25*Math.PI);
		group.add(mesh3);
		
		var mesh4 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 2*wordSize,1*wordSize ), materail);
		mesh4.position.set(4*wordSize, 0*wordSize,0*wordSize);
		mesh4.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh4);
		
		var mesh5 = new THREE.Mesh( new THREE.BoxGeometry( 2*wordSize, 0.9*wordSize,1*wordSize ), materail);
		mesh5.position.set(5.5*wordSize, 0*wordSize,0*wordSize);
		group.add(mesh5);
		
		var mesh6 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh6.position.set(5.05*wordSize, -1*wordSize,0*wordSize);
		mesh6.rotation.set( 0, 0, 0.25*Math.PI);
		group.add(mesh6);
		
		var mesh7 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh7.position.set(1.05*wordSize, -2.5*wordSize,0*wordSize);
		mesh7.rotation.set( 0, 0, 0.25*Math.PI);
		group.add(mesh7);
		
		var mesh8 = new THREE.Mesh( new THREE.BoxGeometry( 0.9*wordSize, 6*wordSize,1*wordSize ), materail);
		mesh8.position.set(0*wordSize, -6*wordSize,0*wordSize);
		group.add(mesh8);
		
		var mesh9 = new THREE.Mesh( new THREE.BoxGeometry( 4.25*wordSize, 0.8*wordSize,1*wordSize ), materail);
		mesh9.position.set(4.25*wordSize, -2.5*wordSize,0*wordSize);
		group.add(mesh9);
		
		var mesh10 = new THREE.Mesh( new THREE.BoxGeometry( 0.9*wordSize, 6.5*wordSize,1*wordSize ), materail);
		mesh10.position.set(5.95*wordSize, -6*wordSize,0*wordSize);
		group.add(mesh10);
		
		var mesh11 = new THREE.Mesh( new THREE.BoxGeometry( 2*wordSize, 0.8*wordSize,1*wordSize ), materail);
		mesh11.position.set(5.45*wordSize, -8.95*wordSize,0*wordSize);
		mesh11.rotation.set( 0, 0, -0.1*Math.PI);
		group.add(mesh11);
		
		var mesh12 = new THREE.Mesh( new THREE.BoxGeometry( 2.5*wordSize, 0.8*wordSize,1*wordSize ), materail);
		mesh12.position.set(3*wordSize, -4*wordSize,0*wordSize);
		group.add(mesh12);
		
		var mesh13 = new THREE.Mesh( new THREE.BoxGeometry( 2.5*wordSize, 0.8*wordSize,1*wordSize ), materail);
		mesh13.position.set(3*wordSize, -6*wordSize,0*wordSize);
		group.add(mesh13);
		
		var mesh14 = new THREE.Mesh( new THREE.BoxGeometry( 2.5*wordSize, 0.8*wordSize,1*wordSize ), materail);
		mesh14.position.set(3*wordSize, -8*wordSize,0*wordSize);
		group.add(mesh14);
		
		var mesh15 = new THREE.Mesh( new THREE.BoxGeometry( 0.9*wordSize, 5*wordSize,1*wordSize ), materail);
		mesh15.position.set(2*wordSize, -6*wordSize,0*wordSize);
		group.add(mesh15);
		
		var mesh16 = new THREE.Mesh( new THREE.BoxGeometry( 0.9*wordSize, 5*wordSize,1*wordSize ), materail);
		mesh16.position.set(4*wordSize, -6*wordSize,0*wordSize);
		group.add(mesh16);
		
		group.position.set( -10*wordSize, -2*wordSize,0*wordSize);
		return group;
	}
	function Li() {
		var group = new THREE.Group();
		var materail = new THREE.MeshBasicMaterial({ color:0xed9f33});
		
		var mesh1 = new THREE.Mesh( new THREE.BoxGeometry( 4*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh1.position.set( 0*wordSize, 0.5*wordSize,0*wordSize);
		group.add(mesh1);
		
		var mesh2 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 6*wordSize,1*wordSize ), materail);
		mesh2.position.set( 1.5*wordSize, -2*wordSize,0*wordSize);
		group.add(mesh2);
		
		var mesh3 = new THREE.Mesh( new THREE.BoxGeometry( 2*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh3.position.set( 1*wordSize, -5*wordSize,0*wordSize);
		mesh3.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh3);
		
		var mesh4 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 8*wordSize,1*wordSize ), materail);
		mesh4.position.set( -1*wordSize, -1.25*wordSize,0*wordSize);
		mesh4.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh4);
		
		var mesh5 =new THREE.Mesh( new THREE.BoxGeometry( 6*wordSize, 1*wordSize,1*wordSize ), materail);
		mesh5.position.set( -0.25*wordSize, 2.5*wordSize,0*wordSize);
		group.add(mesh5);
		
		var mesh6 = new THREE.Mesh( new THREE.BoxGeometry( 1*wordSize, 9*wordSize,1*wordSize ), materail);
		mesh6.position.set( -3*wordSize, -1.5*wordSize,0*wordSize);
		mesh6.rotation.set( 0, 0, -0.025*Math.PI);
		group.add(mesh6);
		
		group.position.set( 7.5*wordSize, -4.5*wordSize,0*wordSize);
		return group;
	}
});










