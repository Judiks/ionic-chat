using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace despatch.Infrastructure.Migrations
{
    public partial class addcontactdetails : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_AspNetUsers_FriendId1",
                table: "Contacts");

            migrationBuilder.DropForeignKey(
                name: "FK_Messages_Rooms_RoomId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_Messages_RoomId",
                table: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_Contacts_FriendId1",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "ChatId",
                table: "UserRooms");

            migrationBuilder.DropColumn(
                name: "FriendId1",
                table: "Contacts");

            migrationBuilder.AddColumn<int>(
                name: "MissedMessages",
                table: "UserRooms",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastMessageId",
                table: "Rooms",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PrivacyType",
                table: "Rooms",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Rooms",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "RoomId",
                table: "Messages",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "SendDate",
                table: "Messages",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Text",
                table: "Messages",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Contacts",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ContactDataId",
                table: "Contacts",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ContactData",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactData", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Rooms_LastMessageId",
                table: "Rooms",
                column: "LastMessageId",
                unique: true,
                filter: "[LastMessageId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_ContactDataId",
                table: "Contacts",
                column: "ContactDataId");

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_UserId",
                table: "Contacts",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_ContactData_ContactDataId",
                table: "Contacts",
                column: "ContactDataId",
                principalTable: "ContactData",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_AspNetUsers_UserId",
                table: "Contacts",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Rooms_Messages_LastMessageId",
                table: "Rooms",
                column: "LastMessageId",
                principalTable: "Messages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_ContactData_ContactDataId",
                table: "Contacts");

            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_AspNetUsers_UserId",
                table: "Contacts");

            migrationBuilder.DropForeignKey(
                name: "FK_Rooms_Messages_LastMessageId",
                table: "Rooms");

            migrationBuilder.DropTable(
                name: "ContactData");

            migrationBuilder.DropIndex(
                name: "IX_Rooms_LastMessageId",
                table: "Rooms");

            migrationBuilder.DropIndex(
                name: "IX_Contacts_ContactDataId",
                table: "Contacts");

            migrationBuilder.DropIndex(
                name: "IX_Contacts_UserId",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "MissedMessages",
                table: "UserRooms");

            migrationBuilder.DropColumn(
                name: "LastMessageId",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "PrivacyType",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "SendDate",
                table: "Messages");

            migrationBuilder.DropColumn(
                name: "Text",
                table: "Messages");

            migrationBuilder.DropColumn(
                name: "ContactDataId",
                table: "Contacts");

            migrationBuilder.AddColumn<string>(
                name: "ChatId",
                table: "UserRooms",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "RoomId",
                table: "Messages",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Contacts",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FriendId1",
                table: "Contacts",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Messages_RoomId",
                table: "Messages",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_FriendId1",
                table: "Contacts",
                column: "FriendId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_AspNetUsers_FriendId1",
                table: "Contacts",
                column: "FriendId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Messages_Rooms_RoomId",
                table: "Messages",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
