<?php

class View{

	public $view;

	public function __construct($name){
		$this->view = $name;
	}

	public function show(){
		require($this->view.'.htm');
	}

}

?>