using Microsoft.EntityFrameworkCore.Migrations;

namespace despatch.Infrastructure.Migrations
{
    public partial class updatedatabaseentities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserRooms_AspNetUsers_UserId",
                table: "UserRooms");

            migrationBuilder.DropIndex(
                name: "IX_UserRooms_UserId",
                table: "UserRooms");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "UserRooms");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "UserRooms",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserRooms_UserId",
                table: "UserRooms",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserRooms_AspNetUsers_UserId",
                table: "UserRooms",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
