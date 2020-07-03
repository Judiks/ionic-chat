using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ionic_chat.Infrastructure.Migrations
{
    public partial class update_room : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Rooms",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "Img",
                table: "Rooms",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Rooms",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "Img",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Rooms");
        }
    }
}
