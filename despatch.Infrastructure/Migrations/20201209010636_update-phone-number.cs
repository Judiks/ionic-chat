using Microsoft.EntityFrameworkCore.Migrations;

namespace despatch.Infrastructure.Migrations
{
    public partial class updatephonenumber : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Number",
                table: "PhoneNumbers",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PhoneNumbers_Number",
                table: "PhoneNumbers",
                column: "Number",
                unique: true,
                filter: "[Number] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_PhoneNumbers_Number",
                table: "PhoneNumbers");

            migrationBuilder.AlterColumn<string>(
                name: "Number",
                table: "PhoneNumbers",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
