"use strict";
//enumerables
var Roles;
(function (Roles) {
    Roles["user"] = "us789";
    Roles["admin"] = "df45";
    Roles["gestor"] = "gs456";
})(Roles || (Roles = {}));
console.log(Roles.gestor);
