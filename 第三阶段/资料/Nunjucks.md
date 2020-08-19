# Nunjucks

### 模版引擎：

是为了将显示与数据分离，其本质是将模板文件和数据通过模板引擎生成最终的HTML代码。

我们来看一下解构先。



### 语法：

模版继承：

```jinja2
{% extends 'content.njk' %}

{% block top %}
<h1>banyuan</h1>
<p>Welcome use banyuan</p>
<p>Thank you</p>
{% endblock %}

{% block left %}
<span>This left</span>
{% endblock %}

{% block right %}
<span>This right</span>
{% endblock %}
```



Include:

```jinja2
{% include 'test.njk'%}
```



过滤器：

```jinja2
{{ foo | title }}
{{ foo | join(",") }}
{{ foo | replace("foo", "bar") | capitalize }}
```



If:

```jinja2
{% if hungry %}
  I am hungry
{% elif tired %}
  I am tired
{% else %}
  I am good!
{% endif %}
```



For:

```jinja2
{% for ingredient, amount in food %}
  Use {{ amount }} of {{ ingredient }}
{% endfor %}
```



让我们重新写一下todolist？

