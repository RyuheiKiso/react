var builder = WebApplication.CreateBuilder(args);

// サービスをコンテナに追加
// Swagger/OpenAPI の設定については https://aka.ms/aspnetcore/swashbuckle を参照
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// HTTP リクエストパイプラインの構成
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");

app.MapGet("/api/client-ip", (HttpContext context) =>
{
    // クライアントのIPアドレスを取得
    var clientIp = context.Connection.RemoteIpAddress?.ToString();
    return Results.Json(new { ip = clientIp });
});

// デバッグ環境の場合はポート5000でアプリを実行
if (app.Environment.IsDevelopment())
{
    app.Run("http://localhost:5000");
}
else
{
    // 本番環境ではデフォルトのポートでアプリを実行
    app.Run();
}