// gRPC通信ユーティリティ
export function grpcRequest(service: any, request: any) {
    return service(request);
}
