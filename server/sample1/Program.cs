using Sample1.Shared.Utils;

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

// IpManager をサービスとして登録
builder.Services.AddSingleton<IpManager>();

var app = builder.Build();

// クライアントIPエンドポイントを登録
app.MapClientIpEndpoint();

// HTTP リクエストパイプラインの構成
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");

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