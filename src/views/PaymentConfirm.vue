<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form>
                    <div class="form-group row">
                        <label for="Name" class="col-sm-2 col-form-label">Name :</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext" id="staticEmail" v-model="userInfo.name" disabled>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="Phone" class="col-sm-2 col-form-label">Phone :</label>
                        <div class="col-sm-10">
                        <input type="number" class="form-control-plaintext" id="staticEmail" v-model="userInfo.phone" disabled>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="Address" class="col-sm-2 col-form-label">Address :</label>
                        <div class="col-sm-10">
                        <textarea class="form-control-plaintext" v-model="userInfo.address" cols="30" rows="3" disabled></textarea>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="Address" class="col-sm-2 col-form-label">Payment Type :</label>
                        <div class="col-sm-10">
                        <select class="form-control-plaintext">
                            <option value="1" :selected="userInfo.payment_type == 1">Cash On Delivery</option>
                            <option value="2" :selected="userInfo.payment_type == 2">MPU</option>
                            <option value="3" :selected="userInfo.payment_type == 3">Bank Transfer</option>
                        </select>
                        </div>
                    </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
    userInfo: Object
    }
}
</script>