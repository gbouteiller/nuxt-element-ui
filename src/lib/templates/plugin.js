<% options.components.forEach((component) => { %>import <%= component.className %> from 'element-ui/lib/<%= component.fileName %>';
<% }) %>
import Vue from 'vue';

<% options.components.forEach((component) => { %>Vue.use(<%= component.className %>);
<% }) %>