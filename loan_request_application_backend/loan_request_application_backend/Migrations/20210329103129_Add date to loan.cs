using Microsoft.EntityFrameworkCore.Migrations;

namespace loan_request_application_backend.Migrations
{
    public partial class Adddatetoloan : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "date",
                table: "loan",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "date",
                table: "loan");
        }
    }
}
