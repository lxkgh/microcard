<!DOCTYPE html>
<html>
<head>
    <title>
        ${title!'microcard'}
    </title>
    <!-- <meta http-equiv="Cache-control" content="no-cache"> -->
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="format-detection"content="telephone=no, email=no" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="renderer" content="webkit"> <!-- 360浏览器指定默认极速模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" > <!-- 优先用Chrome渲染 -->

    <#if CSSes?exists>
        <#list CSSes as css>
            <link href="${css}" rel="stylesheet">
        </#list>
    </#if>
    <style media="screen">
        * {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        *:before,
        *:after {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        html,
        body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        #common-body,#common-body>div {
            width: 100%;
            height: 100%;
        }
    </style>
</head>

<body>
    <#if Datas?exists>
        <#list Datas as data>
            <input type="hidden" id="${data.key}" value="${data.value}" />
        </#list>
    </#if>
    <div id="common-body">
    </div>
    <#if JSs?exists>
        <#list JSs as js>
            <script type="text/javascript" src="${js}"></script>
        </#list>
    </#if>
</body>

</html>
