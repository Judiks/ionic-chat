using Microsoft.EntityFrameworkCore.Migrations;

namespace despatch.Infrastructure.Migrations
{
    public partial class updateuserroom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_Rooms_RoomId",
                table: "Images");

            migrationBuilder.DropIndex(
                name: "IX_Images_RoomId",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "RoomId",
                table: "Images");

            migrationBuilder.AddColumn<string>(
                name: "ContactId",
                table: "UserRooms",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserRooms_ContactId",
                table: "UserRooms",
                column: "ContactId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserRooms_Contacts_ContactId",
                table: "UserRooms",
                column: "ContactId",
                principalTable: "Contacts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserRooms_Contacts_ContactId",
                table: "UserRooms");

            migrationBuilder.DropIndex(
                name: "IX_UserRooms_ContactId",
                table: "UserRooms");

            migrationBuilder.DropColumn(
                name: "ContactId",
                table: "UserRooms");

            migrationBuilder.AddColumn<string>(
                name: "RoomId",
                table: "Images",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Images_RoomId",
                table: "Images",
                column: "RoomId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Rooms_RoomId",
                table: "Images",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
