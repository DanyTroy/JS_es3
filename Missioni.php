<html>
    <head>
        <h1>Storie</h1>
    </head>
    <body>
    <?php
		$n = rand(1, 7);
		$nc = 0;
        switch($n){
            case 1:
                $nc = 1;
                break;
                case 2:
                    $nc = 2;
                    break;
                    case 3:
                        $nc = 3;
                        break;
                        case 4:
                            $nc = 4;
                            break;
                            case 5:
                                $nc = 6;
                                break;
                                case 6:
                                    $nc = 8;
                                    break;
                                    case 7:
                                        $nc = 9;
                                        break;
        }
        echo "Storia numero $nc";
        ?>
    </body>
</html>