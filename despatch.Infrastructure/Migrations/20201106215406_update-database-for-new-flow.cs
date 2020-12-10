using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace despatch.Infrastructure.Migrations
{
    public partial class updatedatabasefornewflow : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ContactData",
                table: "ContactData");

            migrationBuilder.DropColumn(
                name: "MissedMessages",
                table: "UserRooms");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "ContactData");

            migrationBuilder.RenameTable(
                name: "ContactData",
                newName: "ContactDatas");

            migrationBuilder.AddColumn<string>(
                name: "MissedMessagesCount",
                table: "UserRooms",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CityId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CountryId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "BirthdayDate",
                table: "ContactDatas",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DisplayName",
                table: "ContactDatas",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HonorificPrefix",
                table: "ContactDatas",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HonorificSuffix",
                table: "ContactDatas",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MiddleName",
                table: "ContactDatas",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Nickname",
                table: "ContactDatas",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "ContactDatas",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ContactDatas",
                table: "ContactDatas",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    DeviceName = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    DeviceUrlId = table.Column<int>(nullable: true),
                    SourseUrlId = table.Column<int>(nullable: true),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Organizations",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Position = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Organizations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PhoneNumbers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    Number = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhoneNumbers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Urls",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    Path = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Urls", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ContactDataAddresses",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    ContactDataId = table.Column<string>(nullable: true),
                    AddressId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactDataAddresses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ContactDataAddresses_Addresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "Addresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ContactDataAddresses_ContactDatas_ContactDataId",
                        column: x => x.ContactDataId,
                        principalTable: "ContactDatas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserAddresses",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    AddressId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserAddresses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserAddresses_Addresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "Addresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserAddresses_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ContactDataImages",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    ContactDataId = table.Column<string>(nullable: true),
                    ImageId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactDataImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ContactDataImages_ContactDatas_ContactDataId",
                        column: x => x.ContactDataId,
                        principalTable: "ContactDatas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ContactDataImages_Images_ImageId",
                        column: x => x.ImageId,
                        principalTable: "Images",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserImages",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    ImageId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserImages_Images_ImageId",
                        column: x => x.ImageId,
                        principalTable: "Images",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserImages_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ContactDataOrganizations",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    ContactDataId = table.Column<string>(nullable: true),
                    OrganizationId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactDataOrganizations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ContactDataOrganizations_ContactDatas_ContactDataId",
                        column: x => x.ContactDataId,
                        principalTable: "ContactDatas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ContactDataOrganizations_Organizations_OrganizationId",
                        column: x => x.OrganizationId,
                        principalTable: "Organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserOrganizations",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    ContactDataId = table.Column<string>(nullable: true),
                    OrganizationId = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserOrganizations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserOrganizations_Organizations_OrganizationId",
                        column: x => x.OrganizationId,
                        principalTable: "Organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserOrganizations_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ContactDataPhoneNumbers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    ContactDataId = table.Column<string>(nullable: true),
                    PhoneNumberId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactDataPhoneNumbers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ContactDataPhoneNumbers_ContactDatas_ContactDataId",
                        column: x => x.ContactDataId,
                        principalTable: "ContactDatas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ContactDataPhoneNumbers_PhoneNumbers_PhoneNumberId",
                        column: x => x.PhoneNumberId,
                        principalTable: "PhoneNumbers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserPhoneNumbers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    PhoneNumberId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserPhoneNumbers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserPhoneNumbers_PhoneNumbers_PhoneNumberId",
                        column: x => x.PhoneNumberId,
                        principalTable: "PhoneNumbers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserPhoneNumbers_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ContactDataUrls",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    ContactDataId = table.Column<string>(nullable: true),
                    UrlId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactDataUrls", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ContactDataUrls_ContactDatas_ContactDataId",
                        column: x => x.ContactDataId,
                        principalTable: "ContactDatas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ContactDataUrls_Urls_UrlId",
                        column: x => x.UrlId,
                        principalTable: "Urls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserUrls",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatingDate = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    UrlId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserUrls", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserUrls_Urls_UrlId",
                        column: x => x.UrlId,
                        principalTable: "Urls",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserUrls_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ContactDataAddresses_AddressId",
                table: "ContactDataAddresses",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactDataAddresses_ContactDataId",
                table: "ContactDataAddresses",
                column: "ContactDataId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactDataImages_ContactDataId",
                table: "ContactDataImages",
                column: "ContactDataId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactDataImages_ImageId",
                table: "ContactDataImages",
                column: "ImageId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactDataOrganizations_ContactDataId",
                table: "ContactDataOrganizations",
                column: "ContactDataId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactDataOrganizations_OrganizationId",
                table: "ContactDataOrganizations",
                column: "OrganizationId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactDataPhoneNumbers_ContactDataId",
                table: "ContactDataPhoneNumbers",
                column: "ContactDataId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactDataPhoneNumbers_PhoneNumberId",
                table: "ContactDataPhoneNumbers",
                column: "PhoneNumberId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactDataUrls_ContactDataId",
                table: "ContactDataUrls",
                column: "ContactDataId");

            migrationBuilder.CreateIndex(
                name: "IX_ContactDataUrls_UrlId",
                table: "ContactDataUrls",
                column: "UrlId");

            migrationBuilder.CreateIndex(
                name: "IX_UserAddresses_AddressId",
                table: "UserAddresses",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_UserAddresses_UserId",
                table: "UserAddresses",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserImages_ImageId",
                table: "UserImages",
                column: "ImageId");

            migrationBuilder.CreateIndex(
                name: "IX_UserImages_UserId",
                table: "UserImages",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserOrganizations_OrganizationId",
                table: "UserOrganizations",
                column: "OrganizationId");

            migrationBuilder.CreateIndex(
                name: "IX_UserOrganizations_UserId",
                table: "UserOrganizations",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserPhoneNumbers_PhoneNumberId",
                table: "UserPhoneNumbers",
                column: "PhoneNumberId");

            migrationBuilder.CreateIndex(
                name: "IX_UserPhoneNumbers_UserId",
                table: "UserPhoneNumbers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserUrls_UrlId",
                table: "UserUrls",
                column: "UrlId");

            migrationBuilder.CreateIndex(
                name: "IX_UserUrls_UserId",
                table: "UserUrls",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropTable(
                name: "ContactDataAddresses");

            migrationBuilder.DropTable(
                name: "ContactDataImages");

            migrationBuilder.DropTable(
                name: "ContactDataOrganizations");

            migrationBuilder.DropTable(
                name: "ContactDataPhoneNumbers");

            migrationBuilder.DropTable(
                name: "ContactDataUrls");

            migrationBuilder.DropTable(
                name: "Countries");

            migrationBuilder.DropTable(
                name: "UserAddresses");

            migrationBuilder.DropTable(
                name: "UserImages");

            migrationBuilder.DropTable(
                name: "UserOrganizations");

            migrationBuilder.DropTable(
                name: "UserPhoneNumbers");

            migrationBuilder.DropTable(
                name: "UserUrls");

            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "Images");

            migrationBuilder.DropTable(
                name: "Organizations");

            migrationBuilder.DropTable(
                name: "PhoneNumbers");

            migrationBuilder.DropTable(
                name: "Urls");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ContactDatas",
                table: "ContactDatas");

            migrationBuilder.DropColumn(
                name: "MissedMessagesCount",
                table: "UserRooms");

            migrationBuilder.DropColumn(
                name: "CityId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "CountryId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "BirthdayDate",
                table: "ContactDatas");

            migrationBuilder.DropColumn(
                name: "DisplayName",
                table: "ContactDatas");

            migrationBuilder.DropColumn(
                name: "HonorificPrefix",
                table: "ContactDatas");

            migrationBuilder.DropColumn(
                name: "HonorificSuffix",
                table: "ContactDatas");

            migrationBuilder.DropColumn(
                name: "MiddleName",
                table: "ContactDatas");

            migrationBuilder.DropColumn(
                name: "Nickname",
                table: "ContactDatas");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "ContactDatas");

            migrationBuilder.RenameTable(
                name: "ContactDatas",
                newName: "ContactData");

            migrationBuilder.AddColumn<int>(
                name: "MissedMessages",
                table: "UserRooms",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "ContactData",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ContactData",
                table: "ContactData",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ContactDataId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    CreatingDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FriendId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Contacts_ContactData_ContactDataId",
                        column: x => x.ContactDataId,
                        principalTable: "ContactData",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Contacts_AspNetUsers_FriendId",
                        column: x => x.FriendId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Contacts_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_ContactDataId",
                table: "Contacts",
                column: "ContactDataId");

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_FriendId",
                table: "Contacts",
                column: "FriendId");

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_UserId",
                table: "Contacts",
                column: "UserId");
        }
    }
}
