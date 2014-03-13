<?php

class UserSeeder extends Seeder {

  public function run()
  {
    // Create users
    $users = array(
      'admin' => array(
        'email' => 'jason.kuchynka@gmail.com'
      )
    );
    foreach ($users as $username => $data) {
      $user = new User;
      $user->username = $username;
      $user->email = $data['email'];
      $user->password = $user->password_confirmation = 'password';
      $user->created_at = $user->updated_at = time();
      $user->confirmed = 1;
      $user->updateUniques();
    }
  }

}