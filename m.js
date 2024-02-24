function redirect() {
    var code = document.getElementsByName("pinz")[0].value;

    // Check if the input code matches a specific code pattern
    switch (code) {
        case "123":
            window.location.href = "./Subjects/maths.html";
            break;
        case "765":
            window.location.href = "./Subjects/biology.html";
            break;
        case "987":
            window.location.href = "./Subjects/physics.html";
            break;
        case "345":
            window.location.href = "index.html"; // Assuming you want to redirect to index.html for code "345"
            break;
        case "374":
            window.location.href = "./Subjects/ani.html"; // Replace "ani" with the first 3 letters of "Animal Husbandry"
            break;
        case "628":
            window.location.href = "./Subjects/off.html"; // Replace "off" with the first 3 letters of "Office Practice"
            break;
        case "721":
            window.location.href = "./Subjects/mar.html"; // Replace "mar" with the first 3 letters of "Marketing"
            break;
        case "538":
            window.location.href = "./Subjects/ins.html"; // Replace "ins" with the first 3 letters of "Insurance"
            break;
        case "917":
            window.location.href = "./Subjects/ict.html"; // Replace "ict" with the first 3 letters of "I.C.T"
            break;
        case "465":
            window.location.href = "./Subjects/civ.html"; // Replace "civ" with the first 3 letters of "Civic Education"
            break;
        case "184":
            window.location.href = "./Subjects/dat.html"; // Replace "dat" with the first 3 letters of "Data Processing"
            break;
        case "829":
            window.location.href = "./Subjects/hea.html"; // Replace "hea" with the first 3 letters of "Health Science"
            break;
        case "276":
            window.location.href = "./Subjects/com.html"; // Replace "com" with the first 3 letters of "Computer Studies"
            break;
        case "573":
            window.location.href = "./Subjects/hea.html"; // Replace "hea" with the first 3 letters of "Health Education"
            break;
        case "725":
            window.location.href = "./Subjects/hlt.html"; // Replace "hlt" with the first 3 letters of "Health Science"
            break;
        case "591":
            window.location.href = "./Subjects/fur.html"; // Replace "fur" with the first 3 letters of "Further Maths (Obj & Essay)"
            break;
        case "437":
            window.location.href = "./Subjects/crk.html"; // Replace "crk" with the first 3 letters of "CRK/IRK (Obj & Essay)"
            break;
        case "372":
            window.location.href = "./Subjects/igb.html"; // Replace "igb" with the first 3 letters of "Igbo (Obj & Essay)"
            break;
        case "819":
            window.location.href = "./Subjects/yor.html"; // Replace "yor" with the first 3 letters of "Yoruba (Obj & Essay)"
            break;
        case "590":
            window.location.href = "./Subjects/bio_practical.html"; // Replace "bio_practical" with the first 3 letters of "Biology Practical"
            break;
        case "455":
            window.location.href = "./Subjects/mat_obj_essay.html"; // Replace "mat_obj_essay" with the first 3 letters of "General Mathematics obj and essay"
            break;
        case "100":
            window.location.href = "./Subjects/lit_obj_essay.html"; // Replace "lit_obj_essay" with the first 3 letters of "Literature (Obj & Essay)"
            break;
        case "101":
            window.location.href = "./Subjects/govt_obj_essay.html"; // Replace "govt_obj_essay" with the first 3 letters of "Government (Obj & Essay)"
            break;
        case "102":
            window.location.href = "./Subjects/geo_obj_essay.html"; // Replace "geo_obj_essay" with the first 3 letters of "Geography (Obj & Essay)"
            break;
        case "103":
            window.location.href = "./Subjects/geo_practical.html"; // Replace "geo_practical" with the first 3 letters of "Geography (practical)"
            break;
        case "104":
            window.location.href = "./Subjects/eco_obj_essay.html"; // Replace "eco_obj_essay" with the first 3 letters of "Economics (Obj & Essay)"
            break;
        case "105":
            window.location.href = "./Subjects/com_obj_essay.html"; // Replace "com_obj_essay" with the first 3 letters of "Commerce (Obj & Essay)"
            break;
        case "106":
            window.location.href = "./Subjects/acc_obj_essay.html"; // Replace "acc_obj_essay" with the first 3 letters of "Accounting (Obj & Essay)"
            break;
        case "107":
            window.location.href = "./Subjects/agr_obj_essay.html"; // Replace "agr_obj_essay" with the first 3 letters of "Agric (Obj & Essay)"
            break;
        case "108":
            window.location.href = "./Subjects/agr_practical.html"; // Replace "agr_practical" with the first 3 letters of "Agric (practical)"
            break;
        case "109":
            window.location.href = "./Subjects/fur_obj_essay.html"; // Replace "fur_obj_essay" with the first 3 letters of "Further Maths (Obj & Essay)"
            break;
        case "110":
            window.location.href = "./Subjects/crk_obj_essay.html"; // Replace "crk_obj_essay" with the first 3 letters of "CRK/IRK (Obj & Essay)"
            break;
        case "111":
            window.location.href = "./Subjects/igb_obj_essay.html"; // Replace "igb_obj_essay" with the first 3 letters of "Igbo (Obj & Essay)"
            break;
        case "112":
            window.location.href = "./Subjects/yor_obj_essay.html"; // Replace "yor_obj_essay" with the first 3 letters of "Yoruba (Obj & Essay)"
            break;
        default:
            window.location.href = "index.html"; // Redirect to a default page if no code matches
            break;
    }
}
