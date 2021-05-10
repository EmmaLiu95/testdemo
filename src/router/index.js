import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Business from '../components/business'
import Index from '../components/index'
import Potential from '../components/potential'
import Userbind from '../components/userbind'
import UserInfo from '../components/userinfo'
import Test from '../components/test'
import ServeRecord from '../components/serveRecord'
import StaffList from '../components/staffList'
import StaffServeList from '../components/staffServeList'
import RecordDetails from '../components/recordDetails'
import Message from '../components/message'

export const constantRoutes=[
	{
		path: "/",
		component: Index,
	},
	{
		path: "/business",
		component: Business,
	},
	{
		path: "/potential",
		component: Potential,
	},
	{
		path: "/userbind",
		component: Userbind,
	},
	{
		path: "/userinfo",
		component: UserInfo,
	},
	{
		path: "/serverecord",
		component: ServeRecord,
	},
	{
		path: "/stafflist",
		component: StaffList,
	},
	{
		path: "/staffservelist",
		component: StaffServeList,
	},
	{
		path: "/recorddetails",
		component: RecordDetails,
	},
	{
		path: "/test",
		component: Test,
	},
	{
		path: "/message",
		component: Message,
	}
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });
  