<% options.components.forEach((c) => { %>
import <%= c.className %> from 'element-ui/lib/<%= c.fileName %>';
<% }); %>
import Vue from 'vue';

<% options.components.forEach((c) => { if (['Loading', 'Message', 'MessageBox', 'Notification'].indexOf(c.className) === -1 ) {%>
Vue.use(<%= c.className %>);
<% } else if (c.className === 'Loading' ) { %>
Vue.use(Loading.directive);
<% } }); %>

<% options.components.forEach((c) => { if (c.className === 'Loading' ) { %>
Vue.prototype.$loading = Loading.service;
<% } else if (c.className === 'MessageBox' ) { %>
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
<% } else if (c.className === 'Notification' ) { %>
Vue.prototype.$notify = Notification;
<% } else if (c.className === 'Message' ) { %>
Vue.prototype.$message = Message;
<% } }); %>