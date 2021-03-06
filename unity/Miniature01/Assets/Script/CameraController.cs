using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    // VARIABLES
    [SerializeField] private float mouseSensibility;

    //REFERENCE
    private Transform parent;

    private void Start()
    {
        parent = transform.parent;
        Cursor.lockState = CursorLockMode.Locked;
    }

        private void Update()
    {
        Rotate();
    }

        private void Rotate()
    {
        float mouseX = Input.GetAxis("Mouse X") * mouseSensibility * Time.deltaTime;

        parent.Rotate(Vector3.up, mouseX);  
    }


}
