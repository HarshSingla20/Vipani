import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        name : {
            type : string,
            required : [true, "Name is required"]
        },
        email : {
            type : string,
            required : [true, "Email is required"],
            unique : true,
            lowercase : true,
            trim : true
        },
        password : {
            type : string,
            required : [true,"Password is required"],
            minlength : [8,"Password must be at least 8 character long"]
        },
        cartItems : [
            {
                quantity : {
                    type : Number,
                    default : 1,
                },
                product : {
                    type : mongoose.Schema.Types.objectId,
                    ref : "Product"
                }
            }
        ],
        role : {
            type : string,
            enum : ["customer","admin"],
            default : "customer"
        }
    },
    {
        timestamps : true
    }
)

const User = mongoose.model("User",userSchema)

export default User