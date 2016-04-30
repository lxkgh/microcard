<!DOCTYPE HTML>
<html>

<head>
    <title>Getting Started: Serving Web Content</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <#if CSSes?exists>
        <#list CSSes as css>
            <link href="${css}" rel="stylesheet">
        </#list>
    </#if>
</head>

<body>
    <#if Datas?exists>
        <#list Datas as data>
            <input type="hidden" id="${data.key}" value="${data.value}" />
        </#list>
    </#if>
    <div id="common-body"></div>
    <#if JSs?exists>
        <#list JSs as js>
            <script type="text/javascript" src="${js}"></script>
        </#list>
    </#if>
</body>

</html>
