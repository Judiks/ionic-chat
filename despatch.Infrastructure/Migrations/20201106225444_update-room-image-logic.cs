using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace despatch.Infrastructure.Migrations
{
    public partial class updateroomimagelogic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Img",
                table: "Rooms");

            migrationBuilder.AlterColumn<string>(
                name: "SourseUrlId",
                table: "Images",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DeviceUrlId",
                table: "Images",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsMain",
                table: "Images",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "RoomId",
                table: "Images",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Images_DeviceUrlId",
                table: "Images",
                column: "DeviceUrlId");

            migrationBuilder.CreateIndex(
                name: "IX_Images_RoomId",
                table: "Images",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_Images_SourseUrlId",
                table: "Images",
                column: "SourseUrlId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Urls_DeviceUrlId",
                table: "Images",
                column: "DeviceUrlId",
                principalTable: "Urls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Rooms_RoomId",
                table: "Images",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Urls_SourseUrlId",
                table: "Images",
                column: "SourseUrlId",
                principalTable: "Urls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_Urls_DeviceUrlId",
                table: "Images");

            migrationBuilder.DropForeignKey(
                name: "FK_Images_Rooms_RoomId",
                table: "Images");

            migrationBuilder.DropForeignKey(
                name: "FK_Images_Urls_SourseUrlId",
                table: "Images");

            migrationBuilder.DropIndex(
                name: "IX_Images_DeviceUrlId",
                table: "Images");

            migrationBuilder.DropIndex(
                name: "IX_Images_RoomId",
                table: "Images");

            migrationBuilder.DropIndex(
                name: "IX_Images_SourseUrlId",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "IsMain",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "RoomId",
                table: "Images");

            migrationBuilder.AddColumn<byte[]>(
                name: "Img",
                table: "Rooms",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SourseUrlId",
                table: "Images",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "DeviceUrlId",
                table: "Images",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
