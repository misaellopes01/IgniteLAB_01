"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var gateway_1 = require("@apollo/gateway");
var apollo_1 = require("@nestjs/apollo");
var common_1 = require("@nestjs/common");
var graphql_1 = require("@nestjs/graphql");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloGatewayDriver,
                    server: {
                        cors: true
                    },
                    gateway: {
                        supergraphSdl: new gateway_1.IntrospectAndCompose({
                            subgraphs: [
                                {
                                    name: 'purchases',
                                    url: 'http://localhost:3333/graphql'
                                },
                                {
                                    name: 'classroom',
                                    url: 'http://localhost:3334/graphql'
                                },
                            ]
                        })
                    }
                }),
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
