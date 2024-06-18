
<?php 

  $quantities = $_POST["quantitiy"];
  $max = $_POST["max"];
  
 function sorteio($quantities, $max){
    $result = new stdClass();
    $result->value = rand(0, $max);
    $result->quantitiy = $quantities;
    $result->max = $max;
    $i = 1;

    while ($i <= $quantities - 1){
        $result->value = $result->value . ", " . rand(0, $max);
        $i++;
    }

    $resp = json_encode($result);
    echo $resp;
}

    sorteio($quantities, $max); 

?>