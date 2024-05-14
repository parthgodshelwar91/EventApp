using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using EventManagementWebAPI.Models;
using Microsoft.Extensions.Configuration;

namespace EventManagementWebAPI.DAL
{
    public class BookingRepository
    {
        int newBookingID = 0;
        private readonly string _connection;
        public BookingRepository(string connection)
        {
            _connection = connection;
        }
        public int CheckBookingAvailability(DateTime bookingDate, int venueId)
        {
            int rowCount = 0;

            using (SqlConnection connection = new SqlConnection(_connection))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "checkBookingAvailability";

                command.Parameters.AddWithValue("@BookingDate", bookingDate);
                command.Parameters.AddWithValue("@VenueID", venueId);

                SqlParameter rowCountParameter = new SqlParameter("@RowCount", SqlDbType.Int);
                rowCountParameter.Direction = ParameterDirection.Output;
                command.Parameters.Add(rowCountParameter);

                command.ExecuteNonQuery();

                rowCount = Convert.ToInt32(rowCountParameter.Value);
            }
        

            return rowCount;
        }
        
        internal Object? BookEvent(DateTime BookingDate, int VenueID, int EventTypeID, int GuestCount, int UserID)
        {
            var returnData = new
            {
                BookingNo = "",
                BookingId = 0
            };

            using (SqlConnection connection = new SqlConnection(_connection))
            {
                connection.Open();
                SqlDataAdapter da=new SqlDataAdapter("InsertBookingVenue", connection);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
               // SqlCommand command = connection.CreateCommand();

                //command.CommandType = CommandType.StoredProcedure;
                //command.CommandText = "InsertBookingVenue";
            // Generate random 4-digit number

                // Add input parameters
                da.SelectCommand.Parameters.AddWithValue("@BookingDate", BookingDate);
                da.SelectCommand.Parameters.AddWithValue("@VenueID", VenueID);
                da.SelectCommand.Parameters.AddWithValue("@EventTypeID", EventTypeID);
                da.SelectCommand.Parameters.AddWithValue("@GuestCount", GuestCount);
                da.SelectCommand.Parameters.AddWithValue("@CreatedBy", UserID);


                DataTable dt = new DataTable();
                da.Fill(dt);
                
                
                if(dt.Rows.Count > 0)
                {

                    int BookingId=Convert.ToInt32(dt.Rows[0]["BookingID"].ToString());
                    string BookingNo = dt.Rows[0]["BookingNo"].ToString();
                    var data = new
                    {
                        BookingNo = BookingNo,
                        BookingId = BookingId
                    };
                           returnData = data;
                }
                return returnData;
                //using (SqlDataReader reader = command.ExecuteReader())
                //{
                //    if (reader.HasRows)
                //    {
                //        //VenueId = (int)reader["VenueId"],

                //        //    VName = reader["VName"].ToString()
                //        string bkno = reader["BookingNo"].ToString();
                //        int BookingId = (int)reader["BookingID"];
                //        if (reader != null)
                //        {
                //            var data = new
                //            {
                //                BookingNo = reader.GetString(0).Trim(),
                //                BookingId = reader.GetInt32(1)
                //            };
                //            returnData = data;

                //        }

                //    }

            }
                     




                
                // Add output parameter for BookingID
                //SqlParameter bookingIDParameter = new SqlParameter("@BookingID", SqlDbType.Int);
                //bookingIDParameter.Direction = ParameterDirection.Output;
                //command.Parameters.Add(bookingIDParameter);

               // 

                // Retrieve the output parameter value
               // newBookingID = (int)bookingIDParameter.Value;
         }
            
        
        private static int GenerateRandomNumber(int min, int max)
        {
            Random random = new Random();
            return random.Next(min, max + 1);
        }

        internal string BookingNoByBookingID(int? result)
        {
            throw new NotImplementedException();
        }

        internal async Task BookVenue(BookingVenue bV)
        {
            using (SqlConnection connection = new SqlConnection(_connection))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "InsertBookingVenue";

                // Add parameters
                command.Parameters.AddWithValue("@VenueID", bV.VenueID);
                command.Parameters.AddWithValue("@EventTypeID", bV.EventTypeID);
                command.Parameters.AddWithValue("@GuestCount", bV.GuestCount);
                command.Parameters.AddWithValue("@CreatedBy", bV.Createdby);
                command.Parameters.AddWithValue("@BookingID", bV.BookingID);
                
               
                

                // Execute the stored procedure
                command.ExecuteNonQuery();

                // Retrieve the output parameter value
               
            }

        }
        }

        }
    


