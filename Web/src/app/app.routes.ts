import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [

    // { path: '', redirectTo: '/aplicacao', pathMatch: 'full' },   // Redireciona para login por padrão    
    // { 
    //     path:'aplicacao',
    //     component:AplicacaoComponent,
    //     children:[
    //         {
    //             path:'center',
    //             component:CenterComponent,
    //         },
    //         {
    //             path:'usuario',
    //             component:UsuarioComponent,
    //         }, 
    //         {
    //             path:'addUser/:id',
    //             component:AddUsuarioComponent
    //         }   , 
    //         {
    //             path:'addUser',
    //             component:AddUsuarioComponent
    //         },
    //         {
    //             path:'chartOfAccount',
    //             component:ChartOfAccountsComponent
    //         },
    //         {
    //             path:'addChartOfAccount',
    //             component:AddChartOfAccountsComponent
    //         }, 
    //         {
    //             path:'addChartOfAccount/:id',
    //             component:AddChartOfAccountsComponent
    //         }  , 
    //         {
    //             path:'daily/:id',
    //             component:DailyComponent
    //         } , 
    //         {
    //             path:'daily',
    //             component:DailyComponent
    //         }, 
    //         {
    //             path:'addDaily/:id',
    //             component:AddDailyComponent
    //         } , 
    //         {
    //             path:'addDaily',
    //             component:AddDailyComponent
    //         }, 
    //         {
    //             path:'company',
    //             component:CompanyComponent
    //         }, 
    //         {
    //             path:'addCompany/:id',
    //             component:AddCompanyComponent
    //         } , 
    //         {
    //             path:'addCompany',
    //             component:AddCompanyComponent
    //         }, 
    //         {
    //             path:'movement',
    //             component:MovimentComponent
    //         }, 
    //         {
    //             path:'addMovement/:id',
    //             component:AddMovimentComponent
    //         } , 
    //         {
    //             path:'addMovement',
    //             component:AddMovimentComponent
    //         }, 
    //         {
    //             path:'costCenter',
    //             component:CostCenterComponent
    //         }, 
    //         {
    //             path:'addCostCenter/:id',
    //             component:AddCostCenterComponent
    //         } , 
    //         {
    //             path:'addCostCenter',
    //             component:AddCostCenterComponent
    //         }, 
    //         {
    //             path:'balancete',
    //             component:BalanceteComponent
    //         }

            
    //     ]
    // },   // Redireciona para login por padrão    
    // { 
    //     path:'login',
    //     component:LoginComponent    
    // }
   
];

@NgModule({
    imports: [],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
