/**
 * Created by Administrator on 2017/6/10 0010.
 */
var app = angular.module("Myapp",["ui.router"]);



app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("kepianguanli1",{
        url:"/kepianguanli1",
        templateUrl:"templates/kepianguanli1.html"
    }).state("qiankeguanli",{
        url:"/qiankeguanli",
        templateUrl:"templates/qiankeguanli.html"
    }).state("shangchuanzuopin1",{
        url:"/shangchuanzuopin1",
        templateUrl:"templates/shangchuanzuopin1.html"
    }).state("shangchuanzuopin2",{
        url:"/shangchuanzuopin2",
        templateUrl:"templates/shangchuanzuopin2.html"
    }).state("shangjiazuopin",{
        url:"/shangjiazuopin",
        templateUrl:"templates/shangjiazuopin.html"
    }).state("shanghuxinxi",{
        url:"/shanghuxinxi",
        templateUrl:"templates/shanghuxinxi.html"
    }).state("kepianguanli2",{
        url:"/kepianguanli2",
        templateUrl:"templates/kepianguanli2.html"
    }).state("yituidan",{
        url:"/yituidan",
        templateUrl:"templates/yituidan.html"
    }).state("suoyoudingdan",{
        url:"/suoyoudingdan",
        templateUrl:"templates/suoyoudingdan.html"
    }).state("zhidingpaiqi",{
        url:"/zhidingpaiqi",
        templateUrl:"templates/zhidingpaiqi.html"
    }).state("shujvbeifen",{
        url:"/shujvbeifen",
        templateUrl:"templates/shujvbeifen.html"
    }).state("dangqiyilan",{
        url:"/dangqiyilan",
        templateUrl:"templates/dangqiyilan.html"
    }).state("dangqimingxi",{
        url:"/dangqimingxi",
        templateUrl:"templates/dangqimingxi.html"
    }).state("tianjiadingdan",{
        url:"/tianjiadingdan",
        templateUrl:"templates/tianjiadingdan.html"
    }).state("yonghuguanli",{
        url:"/yonghuguanli",
        templateUrl:"templates/yonghuguanli.html"
    }).state("yonghuguanli2",{
        url:"/yonghuguanli2",
        templateUrl:"templates/yonghuguanli2.html"
    })

    $urlRouterProvider.otherwise("kepianguanli1")
});